const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    rno:{
        type:String,
    },
   marks:[
    {
        name:String,
        internal:String,
        external:String,
        total:String,
        grade:String,
        credit:Number
    }
   ],
   gpa:{
    type:String
   }
},{
    timestamps:true
});

const User=mongoose.model('User',userSchema);
module.exports=User;