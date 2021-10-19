const express = require("express");
const router = express.Router();
const About = require('../models/about')
const { isLoggedIn } = require('../middleware');


router.get('/about', isLoggedIn, (req, res) => {
    About.find().then((data) => {
        res.render('about', {data: data})
      });    
  })

router.post('/about/edit/:id', isLoggedIn, (req,res)=>{
    About.updateOne({_id: req.params.id}, {
        text: req.body.text
    }).catch((error)=> {return res.send(error)}).then((data) => {res.redirect('/about')});
})



module.exports = router;