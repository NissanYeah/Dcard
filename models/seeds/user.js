const user = require('../user')
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/diagnosis',{ useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('db error')
})

db.once('open',() => {
  user.create({
    account: 'admin',
    password: 'password'
  })
  console.log('admin created')
})



