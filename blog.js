const express = require("express");
const router = express.Router();
const Blog = require('../models/blog')
const { isLoggedIn } = require('../middleware');
const {fileUpload} = require('../fileupload')

router.get('/blogs', isLoggedIn, (req,res)=>{
    Blog.find().then((data) => {
        res.render('blogs', {data: data})
      });
    
  })

router.post('/blogs', isLoggedIn, (req,res) => {
var p = new Blog({
    title: req.body.title,
    category : req.body.category,
    img: fileUpload(req, 'image'),
    author: req.body.author,
    content: req.body.content
});
    p.save().catch((error)=> {return res.send(error)}).then((data) => {res.redirect('/blogs')});
})

router.post('/blogs/edit/:id', isLoggedIn, (req,res) => {
    Blog.updateOne({_id: req.params.id}, {
        title: req.body.title,
        category : req.body.category,
        img: fileUpload(req, 'image'),
        author: req.body.author,
        content: req.body.content,
        updatedAt: Date.now()
    }).catch((error)=> {return res.send(error)}).then((data) => {res.redirect('/blogs')})
    })

router.get('/blogs/delete/:id', isLoggedIn, (req,res) => {
    Blog.remove({_id: req.params.id}).catch((error)=> {return res.send(error)}).then((data) => {res.redirect('/blogs')})
    })

module.exports = router;