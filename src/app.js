import express from 'express'
const app = express()
import cors from 'cors'
import cookieParser from 'cookie-parser'

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    Credential : true
}))

// best practices because we dont want unlimited data so we use this,  for ex: if a form is filled then the limit is this:
app.use(express.json({limit : '16kb'}))
// if we get the data using URL
app.use(express.urlencoded({extended : true , limit :'16kb'}))
// jab mein koi file ya folder store krna chata hu apne serve mein
app.use(express.static('public'))
app.use(cookieParser())

export default app