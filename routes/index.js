const express=require('express');
const router=express.Router();
const homeControl=require('../controller/home_controller');


router.get('/',homeControl.results);
router.post('/get-result',homeControl.getResult)







module.exports=router