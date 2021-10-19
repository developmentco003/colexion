const express = require("express");
const router = express.Router();
const Shopby = require('../models/shopby')
const { isLoggedIn } = require('../middleware');
const {fileUpload} = require('../fileupload');


router.get('/shopby', isLoggedIn, (req, res) => {
    Shopby.find().then((data) => {
        res.render('shopby', {data: data})
      });    
  })

router.post('/shopby/edit/:id', isLoggedIn, (req,res)=>{
    Shopby.updateOne({_id: req.params.id}, {
        curl: req.body.curl,
        surl: req.body.surl,
        aurl: req.body.aurl,
        lurl: req.body.lurl
        
    }).catch((error)=> {return res.send(error)}).then((data) => {res.redirect('/shopby')});
})

router.post('/shopby', isLoggedIn, (req,res)=>{
    var p = new Shopby( {
        curl: req.body.curl,
        surl: req.body.surl,
        aurl: req.body.aurl,
        lurl: req.body.lurl
    })
    p.save().catch((error)=> {return res.send(error)}).then((data) => {res.redirect('/shopby')});
})

// router.get('/shopby/delete/:id', isLoggedIn, (req,res) => {
//     Shopby.remove({_id: req.params.id}).catch((error)=> {return res.send(error)}).then((data) => {res.redirect('/shopby')})
//   })



module.exports = router;