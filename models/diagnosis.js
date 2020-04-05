const mongoose = require('mongoose')
const Schema = mongoose.Schema

const diagnosisSchema = new Schema({
  name: { //學生名稱
    type: String,              
    required: true          
  }, 
  Date: { //日期
    type: Date,              
    required: true          
  },
  DDX_Data: { //疾病
    type: Array,              
    required: true          
  },
  Q_Text_Data:{ //問題
    type: Array,              
    required: true              
  },
  chart_Data:{ //對應表
    type: Array,              
    required: false              
  },
})

module.exports = mongoose.model('diagnosis', diagnosisSchema)


