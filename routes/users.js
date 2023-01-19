var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let product= [
    {
      name:"Samsung Galaxy S20 FE",
      img:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQAxPC3Wc903Oj7JSYHw1EEhFQWpWroTG0G_9mMokC3AcuPyj88fm2vuQzNp6WoqNmQG01mRTdM7LVWQIesT1ZD0D-MDTpKYO_XRzLJCeOjCokUnVAtRLtM&usqp=CAE"
    }
    ,
    {
      name:"Samsung S22 Ultra",
      img:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcShTmfvOYXqVK--kaAdlJjRkN2dfB8bIgRI88F6JY485LQtJ1YsUbgftoYYwi8oRDSu6mlh8OT270apSwf9WFE7HOa5m6aaVcIJOX6xnjDBhCpuoLJvNzNPYg&usqp=CAE"
    }
    ,
    {
      name:"Samsung Galaxy f13 5G",
      img:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQYQTgaXmA2_rgRlzWtmpFl1vVqYkxS8hnuco-TQNpmsVQ3QYgSz3EYoi3dVa_q9I-py2Dx9x3dNzW38t6_Qnkn1FHI8zWbY6overLSnklUGOt2_rXKI3HvPg&usqp=CAE"
    },
    {
      name:"Samsung Galaxy M53 5G",
      img:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTlLimyKtTIczxujVp6m3O9f6DrUXETlK7MnJnZyFAGzdjZjCxTrJBAyPv_awqINgbuxWomY18TPcEMnq7Q6R2xb32voFnZadtM1uhKYcyZ0zC1k_yNFuLu4A&usqp=CAE"
      
    },
    {
      name:"Samsung Galaxy Note 20",
      img:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSwznox_BwBtDB6nWdNRbnd6ml_ObxB4o7BN-goPqOmuxJbhQDLAeOYISLlqBevV6wBBEbt4BNNCv3mQTRAKFnHETGJLA46sFeVIrp6fv9smVCCSs-0WX_SHQ&usqp=CAE"
    }
  ];
  if(req.session.login==true){
    res.render("user",{product});
  }else{
    res.redirect('/');
  }

});

module.exports = router;
