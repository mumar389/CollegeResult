const mongoose=require('mongoose');
//mongodb+srv://umar389:test786@cluster0.dtbfvbd.mongodb.net/clg_result ${process.env.MONGODB_URI}
mongoose.connect(process.env.MONGOURI);

const db=mongoose.connection;


db.on('error',console.error.bind('error','Error in connecting to mongodb'));

db.once('open',function(){
    console.log(`Connected to database successfully`)
})


module.exports=db;