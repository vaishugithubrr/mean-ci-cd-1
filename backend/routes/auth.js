const router = require('express').Router();
const User = require('../models/user.model');

router.route('./signup').post(async(requestAnimationFrame,res)=>{
    const{username,password} = requestAnimationFrame.body;
    const newUser = new User({username,password});
    try{
        await newUser.save();
        res.status(201).json('User created!');
    }catch(err){
        res.status(400).json('Error:'+err);
    }
});

module.exports = router