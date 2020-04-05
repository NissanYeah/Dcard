const mongoose = require('mongoose')
const Schema = mongoose.Schema

const connectionRecord = new Schema({
  ip: { //ip
    type: String,              
    required: true          
  }, 
  rate_limit: { //日期
    type: Number,              
    required: true          
  },
  reset_time: { //重設時間
    type: Date,              
    required: true          
  },
})

module.exports = mongoose.model('connectionRecord', connectionRecord)


