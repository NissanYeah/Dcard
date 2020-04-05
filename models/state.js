const mongoose = require('mongoose')
const Schema = mongoose.Schema

const stateSchema = new Schema({
  enable: { 
    type: Boolean, //網站是否開啟       
    required: true          
  }, 
})

module.exports = mongoose.model('state', stateSchema)
