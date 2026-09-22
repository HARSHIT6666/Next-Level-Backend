
const asyncHandler = (requestHandler)=>{
(req ,res ,next) =>{
    Promise.resolve(requestHandler(req, res , next))
    .catch((error)=> next(error)) 
}
}



export default asyncHandler





// const asyncHandler = ()=>{}
// // aynchandler 2,3 both are same ..nut the syntax is just changed 
// const asyncHandler2 = (func)=>{()=>{}};
// const asyncHandler3 = (func)=>()=>{};





/*
const asyncHandler = (requestHandler)=>{async(req ,res ,next)=>{
    try {
        await requestHandler(res ,req ,next)
        
    } catch (error) {
        res.status(error.code || 500).json({
            success : false,
            message : error.message
        })
    }
}}
    */