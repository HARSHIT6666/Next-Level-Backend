import mongoose, { Schema } from "mongoose";
import { JsonWebTokenError } from "jsonwebtoken";
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({
    username :{
        type  :String ,
        require : true ,
        unique :true ,
        lowercase : true ,
        trim : true ,
        index : true
        } ,

        email :{
        type  :String ,
        require : true ,
        unique :true ,
        lowercase : true ,
        trim : true ,
        } ,
        
        fullname:{
        type  :String ,
        require : true ,
        lowercase : true ,
        trim : true ,  
        index : true
        } , 

        avatar :{
            type : String , //cloudinary url it is similiar to aws which gives us the url for image video etc
            require :true ,
        },
        coverimage :{
        type : String ,
        },
        watchistory :[
            {
                type: mongoose.Schema.type.objectId ,
                ref : "video"
            }
        ] ,
        password :{
            type : String,
            require : [ true , 'Password is required']
        }, 
        refershToken :{
            type : String
        }

    }, {timestamps :true});

//this is used to hash the passsword

    userSchema.pre("save" , async function(next){

        if(!this.isModified("password")) return next()  // only hash the password if the password is new or  has been changed..

        this.password = bcrypt.hash(this.password ,10)
        next()
    })

//this is compare the password enter and stored
    userSchema.methods.isPasswordCorrect = async function (password){
       await bcrypt.compare(password , this.password)
    }


    userSchema.methods.generateAccessToken = function(){
       return jwt.sign(
            {
            _id:this._id,
            email: this.email,
            username :this.username,
            fullname : this.fullname

        },
        process.env.ACCESS_TOKEN_SECRET,
        {
                expiresIn : process.env.ACCESS_TOKEN_EXPIRY
        }
        )
        
    }
    userSchema.methods.generateRefreshToken = function(){
         return jwt.sign(
            {
            _id:this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
                expiresIn : process.env.REFRESH_TOKEN_EXPIRY
        }
    )
    }
    
export const  User = mongoose.model('User' , userSchema)