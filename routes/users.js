const router = require('express').Router();
const user = require('../schemas/userschema');
const bcrypt = require('bcrypt');

router.post("/signup", async(req,res)=>{
    try{
        const salt = await bcrypt.genSalt(8);
        const hashedpass = await bcrypt.hash(req.body.password,salt);

        const newUser = new user({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });

        const user = await newUser.save();
        res.status(200).json(user.id);
    }
    catch(err){
        res.status(500).json(err);
    }
});

router.post("/login", async(req,res)=>{
    try{
       const user = await user.findOne({username:req.body.username})

       if(!user){
           res.status(400).json("Wrong username or password!");
       }

       const auth = await bcrypt.compare(req.body.password,user.password);
       if(!auth){
           res.status(400).json("Wrong username or password");
       }

       res.status(200).json({ id:user.id,username: user.username});
    }

    catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;