const express = require("express");
const router = express.Router();
const Staytune = require('../models/staytune')
const { isLoggedIn } = require('../middleware');

  

router.get('/staytune', isLoggedIn, (req,res)=>{
    Staytune.find().then((data) => {
        res.render('staytune',{data: data})
      });
  })

  router.post('/staytune', isLoggedIn, (req,res) => {
    var p = new Staytune({
      
      email : req.body.email
      
    });
    p.save().catch((error)=> {return res.send(error)}).then((data) => {res.send({code: 'ok'})});
  })

  module.exports = router;