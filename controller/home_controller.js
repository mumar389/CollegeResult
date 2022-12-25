// const fetch = require('node-fetch');
const User=require('../models/User');

module.exports.results=async function(req,res){
  
    return res.render('home',{
      allResult:"",
      message:""
    });
}

//To render Home
module.exports.getResult=async (req,res)=>{
  let allusers=await User.findOne({rno:req.body.rno});
  if(!allusers){
    console.log("Error in fetching");
    return res.render('home',{
      allResult:"",
      message:"Plzz Enter a valid registration number"
    });
  }
  return res.render('home',{
    message:"",
    allResult:allusers
  })

}
