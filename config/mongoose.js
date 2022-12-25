const mongoose=require('mongoose');
mongoose.connect(process.env.MONGOURI);

const db=mongoose.connection;


db.on('error',console.error.bind('error','Error in connecting to mongodb'));

db.once('open',function(){
    console.log(`Connected to database successfully`)
})


module.exports=db;