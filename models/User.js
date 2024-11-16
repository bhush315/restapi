import mongoose from "mongoose";
import { type } from "os";


const userSchema = new mongoose.Schema({
        name:{
            type:String,
            required:true,
        },

        age:{
            type:Number,
            required:true,
        },

        bio:{
            type:String,
            required:true,
        },

       
})



const User = mongoose.model("User", userSchema)



export default User