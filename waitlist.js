const express = require("express");
const router = express.Router();
const Waitlist = require('../models/waitlist')
const { isLoggedIn } = require('../middleware');


router.get('/wait', isLoggedIn, (req,res)=>{
    Waitlist.find().then((data) => {
        res.render('waitlist',{data: data})
      });
  })

  router.post('/wait', isLoggedIn, (req,res) => {
    var p = new Waitlist({
      name: req.body.name,
      email : req.body.email
      
    });
    p.save().catch((error)=> {return res.send(error)}).then((data) => {res.send({code: 'ok'})});
  })

  module.exports = router;