const express=require('express')
const app = express()
 // midleware
 const date = (req,res,next)=>{
     const day = new Date().getDay()
     const hour= new Date().getHours()
if((day ===0 )|| (day===1)||(hour<9) ||(hour>17) ){
     
    res.sendFile(__dirname +'/views/close.html')
}
else{
    next()
}

 }

 app.use(date)
 app.use(express.static('views'))



app.listen(5000,()=>{
    console.log('serveur is running')
})