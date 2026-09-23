import { response } from "express";
import asyncHandler from "../utils/asyncHandler.js";

const registeUSer = asyncHandler(async (req ,res) =>{
    res.status(200).json({
        message : "okk"
    })
})

export default registeUSer