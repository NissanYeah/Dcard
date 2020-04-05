const express = require('express');

const app = express()
// const mongoose = require('mongoose')  
 


// mongoose.connect('mongodb://localhost/diagnosis',{ useNewUrlParser: true,useUnifiedTopology: true })

// const db = mongoose.connection

// app.use(bodyParser.json());

// db.on('error', ()=>{
//   console.log('mongodb error!')
// })

// db.once('open', () => {
//   console.log('mongodb connected!')
// })

// app.use(session({ // 設定session
//   secret: 'your secret key',
//   resave: false,
//   saveUninitialized: true,
// }))



//Router
app.get('/', (req,res)=>{
  var ip = req.header('x-forwarded-for') || req.connection.remoteAddress
  res.send(ip);
})


app.listen('3000', () => {
  console.log(`Backend is running on http://localhost:4000`)
})
