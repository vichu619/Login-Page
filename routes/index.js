var express = require('express');
var router = express.Router();

var emailid = "admin@gmail.com";
var mypassword = "123";

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.session.login){
    res.redirect('/users')
  } else {
    res.render('index', {loginError:req.session.loginError})
    req.session.loginError=false
  }
  });

  router.post('/login',(req,res)=>{
    const {email,password} = req.body;
    if(email == emailid && password == mypassword){
      req.session.login=true;
      res.redirect("/users")
    }else{
      req.session.loginError=true;
       res.redirect("/");
    }
  })

  router.get('/logout',(req,res)=>{
    req.session.destroy()
    res.redirect('/');
  })
  
module.exports = router;
