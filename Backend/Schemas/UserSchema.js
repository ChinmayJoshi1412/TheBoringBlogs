import mongoose from "mongoose";
import bcrypt from 'bcrypt'
const userschema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type:String,
        required: true
    },
    blogs:{
        type:Array,
    }
},{
    timestamps: true
});

userschema.pre('save',async function(next){

    if(!this.isModified('password')){
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
});

userschema.methods.matchPasswords = async function(enteredpass) {
    return await bcrypt.compare(enteredpass, this.password);    
}


const User = mongoose.model('user',userschema);

export default User