const express = require("express");
const router = express.Router();
const Videos = require('../models/video')
const { isLoggedIn } = require('../middleware');
const {fileUpload} = require('../fileupload');


router.get('/video', isLoggedIn, (req, res) => {
    Videos.find().then((data) => {
        res.render('video', {data: data})
      });    
  })

router.post('/video/edit/:id', isLoggedIn, (req,res)=>{
    Videos.updateOne({_id: req.params.id}, {
        text: req.body.text,
        video: fileUpload(req, 'image')
    }).catch((error)=> {return res.send(error)}).then((data) => {res.redirect('/video')});
})

router.post('/video', isLoggedIn, (req,res)=>{
    var p = new Videos( {
        text: req.body.text,
        video: fileUpload(req, 'image')
    })
    p.save().catch((error)=> {return res.send(error)}).then((data) => {res.redirect('/video')});
})

router.get('/video/delete/:id', isLoggedIn, (req,res) => {
    Videos.remove({_id: req.params.id}).catch((error)=> {return res.send(error)}).then((data) => {res.redirect('/video')})
  })



module.exports = router;