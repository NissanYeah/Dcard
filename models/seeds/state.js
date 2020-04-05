const mongoose = require('mongoose')
const state = require('../state')

mongoose.connect('mongodb://127.0.0.1/diagnosis',{ useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection


db.on('error', () => {
  console.log('db error')
})

db.once('open',() => {
  state.create({
    enable: false
  })  
  console.log('state created')
});


