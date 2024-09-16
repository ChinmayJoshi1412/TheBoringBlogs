import express from 'express';
import { registerUser,loginUser,logoutUser } from '../Controllers/userControllers.js';
const router = express.Router();

router.post('/register',registerUser)
router.post('/login',loginUser);
router.post('/profile',(req,res)=>{
    console.log('User profile');
    res.end();
});
router.post('/logout',logoutUser);


export default router;