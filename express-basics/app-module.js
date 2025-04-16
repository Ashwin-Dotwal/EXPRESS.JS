const express=require('express');

const app=express();


//application level settings
app.set('view engine','ejs')

//routing
app.get('/',(req,res)=>{
  res.send('home page')
})


app.post('/api/dara',(req,res)=>{
  res.json({
    message :'Data received',
    data :req.body
  })
})

app.use((error,req,res,next)=>{
  console.log(error.stack)
  res.status(500).send('something went wrong')

})