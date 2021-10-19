const express=require("express");
var fileUpload = require('express-fileupload');
var flash  = require('connect-flash');
const mongoose = require("mongoose");
const passport = require('passport');
const session = require('express-session')
const LocalStrategy = require('passport-local');
const cors = require('cors');
const User = require('./models/user')

const app=express();
app.use(express.json())

app.use(express.urlencoded({ extended: true }))
app.use(express.static('assets'));

app.use(fileUpload({ createParentPath : true}));
app.use(flash());

mongoose.connect("mongodb+srv://rootUser1:5uHC9O7dbb53f0Q5@cluster0.kfyjc.mongodb.net/Colexsive?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true, useNewUrlParser: true});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: database"));
db.once("open", function(){
    console.log("Database connected");
})

const sessionConfig =  {
  secret: "This is the secret to encode and decode sessions",
  resave: false,
  saveUninitialized: false,
  cookie: {
      httpOnly: true,
      expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
      maxAge: 1000 * 60 * 60 * 24 * 7
  }
}

app.use(session(sessionConfig))
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

const { isLoggedIn } = require('./middleware');

app.set('view engine', 'ejs');

const featuresRoutes = require('./routes/features')
app.use('/', featuresRoutes)

const latestRoutes = require('./routes/latest')
app.use('/', latestRoutes)

const aboutRoutes = require('./routes/about')
app.use('/', aboutRoutes)

const blogRoutes = require('./routes/blog')
app.use('/', blogRoutes)

const enterRoutes = require('./routes/enter')
app.use('/', enterRoutes)

const waitRoutes = require('./routes/waitlist')
app.use('/', waitRoutes)

const staytuneRoutes = require('./routes/staylist')
app.use('/', staytuneRoutes)

const adsRoutes = require('./routes/ads')
app.use('/', adsRoutes)

const videoRoutes = require('./routes/video')
app.use('/', videoRoutes)

const shopbyRoutes = require('./routes/shopby')
app.use('/', shopbyRoutes)

const fRoutes = require('./routes/front-endAPIs')
app.use('/', fRoutes)


app.post('/register', async (req, res) => {
  const {email, username, password} = req.body;
  const user = new User({email, username});
  const newUser = await User.register(user, password).catch((error) => {res.send('-1')})
  req.login(newUser, err => {
      if(err) return next(err);
      res.send(newUser);
  })
  
});

app.post('/login', passport.authenticate('local', {failureRedirect: '/login'}), (req, res) => {
  const redirectUrl = req.session.returnTo  || '/';
  res.redirect('/latestupdates');
  
  
   
})

app.get('/admin/logout', (req, res) => {
  
  req.logout();
  res.redirect('/login');
  
})

app.get('/', isLoggedIn, function(req,res){
  res.redirect('/latestupdates')
})


app.get('/login',(req,res)=>{

  res.render('login', {message: ''})
})















app.listen(3000,function(){
  console.log("Port running on 3000")
});
