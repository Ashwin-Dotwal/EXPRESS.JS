const express =require('express');

const app=express();

app.get("/",(req,res)=>{
  res.send("hello world");
});

const port =3000;

app.listen(port,()=>{
  console.log(`server is now running at port ${port}`);
});