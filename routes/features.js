const express = require("express");
const router = express.Router();
const Player = require('../models/player')
const { isLoggedIn } = require('../middleware');
const {fileUpload} = require('../fileupload')

router.post('/player', isLoggedIn, (req,res) => {
    var p = new Player({
      name: req.body.name,
      age : req.body.age,
      cflag: fileUpload(req, 'cflag'),
      pflag: fileUpload(req, 'pflag'),
      orun: req.body.orun,
      orate: req.body.orate,
      owicket: req.body.owicket,
      ocatch: req.body.ocatch,
      trun: req.body.trun,
      trate: req.body.trate,
      twicket: req.body.twicket,
      tcatch: req.body.tcatch
    });
    p.save().catch((error)=> {return res.send(error)}).then((data) => {res.redirect('/features')});
  })


router.get('/features', isLoggedIn, (req,res)=>{
  Player.find().then((data) => {
    res.render('features',{data: data})
  });
  
})

router.post('/player/edit/:id', isLoggedIn, (req,res)=>{

  

  Player.updateOne({_id: req.params.id}, {
    name: req.body.name,
    age : req.body.age,
    cflag: fileUpload(req, 'cflag'),
    pflag: fileUpload(req, 'pflag'),
    orun: req.body.orun,
    orate: req.body.orate,
    owicket: req.body.owicket,
    ocatch: req.body.ocatch,
    trun: req.body.trun,
    trate: req.body.trate,
    twicket: req.body.twicket,
    tcatch: req.body.tcatch
  }).catch((error)=> {return res.send(error)}).then((data) => {res.redirect('/features')})
})

  module.exports = router;