
const express = require('express')
const router = express.Router()
const { authenticated } = require('../config/auth')
const state = require('../models/state')

function message(state){
  const json = {
    enable: '',
    message: ''
  }
  if (state.enable) json.message="網站開啟"; json.enable = state.enable;
  if (!state.enable) json.message="網站關閉"; json.enable = state.enable;

  return json
}

// 獲取網站狀態 GET /state
router.get('/', (req,res)=>{
  state.find()
  .lean()
  .exec((err,state)=>{
    if(err) return console.error(err)
    json = message(state[0])
    return res.send(json)
   })
})


// 開啟與關閉網站狀態 POST /state
router.post('/', authenticated, (req,res)=>{
  state.find((err,state)=>{
    if(err) return console.error(err)
    state[0].enable = !state[0].enable
    state[0].save(err => {
      if (err) return console.error(err)
      json = message(state[0])
      return res.send(json)
    })
  })

})

module.exports = router