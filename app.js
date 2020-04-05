const express = require('express');
const app = express()
const mongoose = require('mongoose')  
const connectionMonitor = require('./middleware/connectionMonitor')  
 
mongoose.connect('mongodb://localhost/Dcard',{ useNewUrlParser: true,useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', ()=>{
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
})


app.use(connectionMonitor) //監測IP連線


app.get('/', (req,res)=>{
  res.send('Connect Successful!')
})


app.listen('4000', () => {
  console.log(`Backend is running on http://localhost:4000`)
})
