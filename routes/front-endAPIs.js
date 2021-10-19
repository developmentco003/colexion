const express = require("express");
const router = express.Router();

const About = require('../models/about')
const Player = require('../models/player')
const Enter = require('../models/enter')
const Blog = require('../models/blog')
const Ads = require('../models/ads')
const Latest = require('../models/latest')
const Shopby = require('../models/shopby')
const Videos = require('../models/video')

router.get('/api/About', (req, res) => {
    About.find().then((data) => {
        res.json(data);
      }); 
})

router.get('/api/Player', (req, res) => {
    Player.find().then((data) => {
        res.json(data);
      }); 
})
router.get('/api/Enter', (req, res) => {
    Enter.find().then((data) => {
        res.json(data);
      }); 
})
router.get('/api/Blog', (req, res) => {
    Blog.find().then((data) => {
        res.json(data);
      }); 
})
router.get('/api/Ads', (req, res) => {
    Ads.find().then((data) => {
        res.json(data);
      }); 
})
router.get('/api/Latest', (req, res) => {
    Latest.find().then((data) => {
        res.json(data);
      }); 
})
router.get('/api/Shopby', (req, res) => {
    Shopby.find().then((data) => {
        res.json(data);
      }); 
})
router.get('/api/Videos', (req, res) => {
    Videos.find().then((data) => {
        res.json(data);
      }); 
})


module.exports = router;