const express = require("express");
const router = express.Router();
const Ads = require('../models/ads')
const { isLoggedIn } = require('../middleware');
const {fileUpload} = require('../fileupload');


router.get('/ads', isLoggedIn, (req, res) => {
    Ads.find().then((data) => {
        res.render('ad', {data: data})
      });    
  })

router.post('/ads/edit/:id', isLoggedIn, (req,res)=>{
    Ads.updateOne({_id: req.params.id}, {
        url: req.body.url,
        img: fileUpload(req, 'image')
    }).catch((error)=> {return res.send(error)}).then((data) => {res.redirect('/ads')});
})

router.post('/ads', isLoggedIn, (req,res)=>{
    var p = new Ads( {
        url: req.body.url,
        img: fileUpload(req, 'image')
    })
    p.save().catch((error)=> {return res.send(error)}).then((data) => {res.redirect('/ads')});
})

router.get('/ads/delete/:id', isLoggedIn, (req,res) => {
    Ads.remove({_id: req.params.id}).catch((error)=> {return res.send(error)}).then((data) => {res.redirect('/ads')})
  })



module.exports = router;