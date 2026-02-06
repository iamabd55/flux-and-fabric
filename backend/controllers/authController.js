import User from "../models/User.js";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();
// Register a new user
export const registerUser=async (req,res)=>{
    const {name,email,password,role}=req.body;
    if(!name || !email || !password){
        return res.status(400).json({message:"All fields required"});
    }
    const checkUser=await User.findOne({email})
    if(checkUser){
        return res.status(400).json({message:"User already exists"});
    }
    const hashedPassword=await bcrypt.hash(password,10);
    const newUser=new User({
        name,
        email,
        password:hashedPassword,
        role
    });
    jwt.sign({userId:newUser._id},process.env.JWT_SECRET,{expiresIn:"1h"},(err,token)=>{
        if(err){
            return res.status(500).json({message:"Error generating token"});
        }
        newUser.token=token;
    });
    
    await newUser.save();

    res.status(201).json({message:"User registered successfully",token:newUser.token});
}

// Login user
export const loginUser=async (req,res)=>{
    const {email,password}=req.body;
    if(!email || !password){
        return res.status(400).json({message:"All fields required"});
    }
    const existingUser=await User.findOne({email});
    if(!existingUser){
        return res.status(400).json({message:"No user found with this email"});
    }
    const isPasswordValid=await bcrypt.compare(password,existingUser.password);
    if(!isPasswordValid){
        return res.status(400).json({message:"Invalid credentials"});
    }
    jwt.sign({userId:existingUser._id},process.env.JWT_SECRET,{expiresIn:"1h"},(err,token)=>{
        if(err){
            return res.status(500).json({message:"Error generating token"});
        }
        existingUser.token=token;
        res.status(200).json({message:"Login successful",token:existingUser.token});
    });
}
// Get user profile
export const getCurrentUser=async (req,res)=>{
    try {
        res.status(200).json({user:req.user});
    } catch (error) {
        res.status(500).json({message:"Error fetching user profile"})
    }
}