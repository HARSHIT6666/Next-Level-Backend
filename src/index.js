import dns from 'dns'
dns.setServers(['1.1.1.1' ,'8.8.8.8'])
import'dotenv/config'
import connectDB from "./db/DB.js"




connectDB()
.then(()=>{
  app.on((error)=>{
    console.log('ERROR' , error);
  })
  app.listen(process.env.port || 8000 , ()=>{
        console.log(`server is running at  port ${process.env.PORT}`)
  })
})
.catch((error) =>{
  'MongoDB connection failed',error
})






















/*
import express from 'express'
const app = express()

const DB_connect =  async () =>{
try {
   await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`) 

   app.on('error' , (error)=>{
    console.log('ERRRR' , error);
    throw error
   })

   app.listen(process.env.PORT ,()=>{
    console.log(`App is listening on the port ${process.env.PORT}`)
   })
} catch (error) {
  console.log('MOONGODB CONNEXTION FAILED ' ,error)
  throw error
}
}

DB_connect()
*/