import { useMemo } from "react";
import userModel from "../models/user.model.js";

export const Register = async (req,res)=>{

    const {email,constact,password,fullname}= req.body
    try{
        const  existringUser = await userModel.findOne({
            $or:[
                {email},
                {constact}
            ]
        })
        if(existringUser){
            return res.status(400).json({
                message:"user with  this  email or contact is already exists"
            })
        }
    }
}