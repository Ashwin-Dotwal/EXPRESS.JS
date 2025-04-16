const express=require('express');

const app = express();

const myFirstMiddelware=(req,res,next)=>{
  console.log("this first middelware will be run on request");

  next();
};

app.use(myFirstMiddelware);

app.get('/',(req,res)=>{
  res.send('Home page')
})

app.get('/about',(req,res)=>{
  res.send("About page")
})

app.listen(3001,()=>{
  console.log(`server is now running on port 3001`);
  
})

