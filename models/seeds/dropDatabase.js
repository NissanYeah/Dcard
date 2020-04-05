const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/diagnosis',{ useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('open', function(){
  db.dropDatabase(function(err, result){
      console.log('Dropped database')
  });
});

