const express = require('express');

//1st step to create a web server

const app = express();

app.get("/api/v1/user/home",(req,res)=>{

  res.send("<h1>Home Page</h1>");
})


app.get("/api/v1/user/profile",(req,res)=>{

    res.status(200).json({
      success:true,
      user:{
        username:"ashwin123",
        email:"Ashwin123@gmail.com"
      }
    });
})


app.listen(8000,()=>{
  console.log('server listen at port 8000');
  
})