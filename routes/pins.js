const router = require('express').Router();
const pins = require('../schemas/pinschema');

//for creating a pin

router.post("/",async(req,res)=>{
    const postpin = new pins(req.body);
    try{
        const newpin = await newpost.save();
        res.status(200).json(newpin);
    }catch(err){
        res.status(500).json(err);
    }
});

//getting alll saved pins 

router.get("/", async(req,res)=>{
    try{
        const getpin = new pins.find();
        res.status(200).json(getpins);
    }
    catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;