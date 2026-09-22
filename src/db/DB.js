import mongoose from "mongoose";

const connectDB = async()=>{
    try {
    
       const connectionInstance =  await mongoose.connect(process.env.MONGODB_URI)
       console.log(`\n MONGODB CONNECTED !! DB HOST : ${connectionInstance.connection.host}`)
       console.log('database connected')
    
    } catch (error) {
        console.log('MONGODB CONNECTION FAILED' ,error);
       
        process.exit(1) 
    }
}

export default connectDB