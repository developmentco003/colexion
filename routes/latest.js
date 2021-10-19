const express = require("express");
const router = express.Router();
const Latest = require('../models/latest')
const { isLoggedIn } = require('../middleware');
const {fileUpload} = require('../fileupload')

router.get('/latestupdates', isLoggedIn, (req,res)=>{
    Latest.find().then((data) => {
        res.render('latest', {data: data})
      });
    
  })

router.post('/latestupdates/edit/:id', isLoggedIn, (req,res)=>{
    Latest.updateOne({_id: req.params.id}, {
        text: req.body.text,
        img: fileUpload(req, 'image')
    }).catch((error)=> {return res.send(error)}).then((data) => {res.redirect('/latestupdates')});
})



router.get('/latestupdates/delete/:id', isLoggedIn, (req,res) => {
    Latest.remove({_id: req.params.id}).catch((error)=> {return res.send(error)}).then((data) => {res.redirect('/latestupdates')})
  })

module.exports = router;