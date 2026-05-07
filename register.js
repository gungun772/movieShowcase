const express = require('express');
const cors = require('cors')
const app = express();
const port = 3001
app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
    res.status(200).send("Home Page...")
})

app.get("/about",(req,res)=>{
    res.send("About Page....")
})
const users = []
app.get("/register",(req,res)=>{
    res.sendFile(__dirname+"/register.html");
})
app.post("/register_user",(req,res)=>{
    let user_id;
    if(users.length===0){
        user_id = 1;
    }else{
        user_id = users[users.length-1].id + 1;
    }
    const new_user = {
        id : user_id,
        name : req.body.name,
        age : req.body.age,
        email : req.body.email,
        password : req.body.password,
        phone : req.body.phone,
        ticket: req.body.ticket,
        movie: req.body.movie
    }
    users.push(new_user);
    console.log(users);
    res.status(201).json({message : "User Registered..."});
})
app.listen(port,()=>{
    console.log("Server Running....")   ;
})