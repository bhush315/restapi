import mongoose from "mongoose";
import User from "../models/User.js";


export const findAllUsers = async (req,res)=>{
    try{
        const user = await User.find()
    res.status(201).json(user)

    }
    catch(err){
        res.status(500).json({message:err.message})
    }
}


export const  createUsers = async(req,res)=>{
    const {name,age,bio}=req.body;
            if(!name||!age|| !bio){
                return res.status(400).json({message:"input cannot be blank"})
            }
    try{
        
        const user= await User.create({name, age,bio})
         res.status(201).json(user)

    }

    catch(err){
        res.status(500).json({message:err.message})
    }
}



export const updateUsers =async(req,res)=>{
    const {name,age,bio}=req.body
    const {_id}= req.params
    if(!mongoose.Types.ObjectId.isValid(_id)){
        res.status(404).json({message:'not a valid id'})

    }

    try{
        const user= await User.findByIdAndUpdate(_id, {name,age,bio})
        res.status(201).json(user)
    }
    catch(err){
        res.status(500).json({message:err.message})
    }

};

export const deleteUsers= async (req,res)=>{
    const {_id}= req.params
    
    try{
        if(!mongoose.Types.ObjectId.isValid(_id)){
            res.status(404).json({message:'not a valid id'})
    
        }
        if(!user){
            return res.status(404).json({message: 'not found'})
            
        }
        const user = await User.findByIdAndDelete(_id)
        res.status(201).json({message:"deleted user successfully"})
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
}
