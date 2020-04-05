
const connectionRecord = require('../models/connectionRecord')

const connectionMonitor = function(req, res, next){

  var ip = req.header('x-forwarded-for') || req.connection.remoteAddress // 獲取IP
  if (ip.substr(0, 7) == "::ffff:") {
    ip = ip.substr(7)
  }

  connectionRecord.find( { ip: ip },(err, result)=>{ // 尋找IP紀錄
    const maxRequestTimesAllowed = 1000
    const recordExisted = result.length
    const thisTime = new Date()
    const resetTime = new Date(); resetTime.setHours(resetTime.getHours() + 1);

    if(!recordExisted) { // 1. 允許連線&增加紀錄 (如果紀錄不存在)

      const newRecord = new connectionRecord({
        ip: ip,
        rate_limit: maxRequestTimesAllowed,
        reset_time: resetTime,
      })

      newRecord.save((err,data) => { 
        res.header("X-RateLimit-Remaining", maxRequestTimesAllowed)
        res.header("X-RateLimit-Reset",resetTime) 
        next();
      })

    } else {
      const rateLimitExceeded = result[0].rate_limit <= 0 ? true : false
      const resetTimeLimitExceeded = result[0].reset_time - thisTime < 0 ? true : false 
      
      if(!rateLimitExceeded && !resetTimeLimitExceeded)  { //2. 允許連線 (如果次數沒超過 && 時間未過期 )
        result[0].rate_limit = result[0].rate_limit -1 
        result[0].save(err=>{
          res.header("X-RateLimit-Remaining", result[0].rate_limit)
          res.header("X-RateLimit-Reset", result[0].reset_time)
          next();
        })
      } else if(rateLimitExceeded && !resetTimeLimitExceeded) {  // 3. 拒絕連線（如果次數超過 && 時間未過期）

        res.status(429).send('Too Many Requests');

      } else if(resetTimeLimitExceeded) {  ///4. 允許連線＆重設可請求數量（如果次數超過 && 時間過期）
        result[0].rate_limit = maxRequestTimesAllowed
        result[0].reset_time = resetTime
        result[0].save(err=>{
          res.header("X-RateLimit-Remaining",result[0].rate_limit)
          res.header("X-RateLimit-Reset",result[0].reset_time)
          next();
        })
      }
    }

  })
}

module.exports = connectionMonitor