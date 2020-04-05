const mongoose = require('mongoose')
const Schema = mongoose.Schema

const connectionRecord = new Schema({
  ip: { //ip
    type: String,              
    required: true          
  }, 
  rate_limit: { //剩餘的請求數量
    type: Number,              
    required: true          
  },
  reset_time: { //歸零的時間
    type: Date,              
    required: true          
  },
})

module.exports = mongoose.model('connectionRecord', connectionRecord)


