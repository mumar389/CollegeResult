const express=require('express');
const port=8950;
const path=require('path');
const db=require('./config/mongoose');
// const excelFile=require('./files');
// const pdfReader=require('./Filezz')




const app=express();


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))
app.use(express.urlencoded({extended:true}));
app.use(express.json());



app.use('/',require('./routes'))





app.listen(port||process.env.PORT,function(){
    console.log(`Server is running on port-:${process.env.PORT}`);
})
