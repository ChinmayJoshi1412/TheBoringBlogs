import User from '../Schemas/UserSchema.js';
import generateToken from '../utils/generatetoken.js'


const registerUser = async(req,res)=>{
    const {name,email,password} = req.body;

    const userExists = await User.findOne({email})
    if(userExists){
        res.status(400).json({message:'User with this email already exists'});
    }
    else
    {    
        const user = await User.create({
            name,
            email,
            password
        });
        if(user)
        {
            generateToken(res,user._id)
            res.status(201).json({
                _id:user._id,
                name:user.name,
                email: user.email
            });
        }else{
            res.status(400).json({message:'Invalid User data'});
        }
    }
    res.end();
}

const loginUser = async(req,res)=>{
    const {email, password} = req.body;

    const user = await User.findOne({email});
    
    if(user && (await user.matchPasswords(password))){
        generateToken(res,user._id)
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email: user.email
        });
    }else{
        res.status(401).json({message:'Invalid email or password'});
    }
    res.end();
};

const logoutUser = async(req,res)=>{
    res.cookie('jwt','',{
        httpOnly:true,
        expires: new Date(0)
    })
    res.status(200).json({message:'User loggedout'});
};

export {registerUser,loginUser,logoutUser};