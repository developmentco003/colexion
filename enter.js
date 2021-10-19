const express = require("express");
const router = express.Router();
const Enter = require('../models/enter')
const { isLoggedIn } = require('../middleware');
const {fileUpload} = require('../fileupload');


router.get('/enter', isLoggedIn, (req,res)=>{
    Enter.find().then((data) => {
        res.render('enter',{data: data})
      });
  })

router.post('/enter', isLoggedIn, (req,res)=>{

    var p = new Enter({
        name: req.body.name,
        age : req.body.age,
        type: req.body.type,
        img: fileUpload(req, 'image')
        
      });
      p.save().catch((error)=> {return res.send(error)}).then((data) => {res.redirect('/enter')});


})

router.post('/enter/edit/:id', isLoggedIn, (req,res)=>{

    Enter.updateOne({_id: req.params.id}, {
        name: req.body.name,
        age : req.body.age,
        type: req.body.type,
        img: fileUpload(req, 'image')
        
      }).catch((error)=> {return res.send(error)}).then((data) => {res.redirect('/enter')})
  })
  
  router.get('/enter/delete/:id', isLoggedIn, (req,res) => {
    Enter.remove({_id: req.params.id}).catch((error)=> {return res.send(error)}).then((data) => {res.redirect('/enter')})
  })

module.exports = router;