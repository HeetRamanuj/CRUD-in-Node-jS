const express =  require("express")
const mongoose = require('mongoose')

const userModel = require('./models/users')

const app = express();
app.use(express.json());
let port = 7000;

mongoose.connect("mongodb://127.0.0.1:27017/todo").then(()=>{
    console.log("DB Connected")
}).catch(()=>console.log("Error while connecting DB"))

app.get('/' , (req , res)=>{
    res.send("default...")
})
app.get('/home' , (req , res)=>{
    res.send("This is home page...")
})

app.post('/addUser' ,async (req , res) => {

    let{first_name,last_name ,phone} = req.body;
    let createUser = await userModel.create({
        first_name,last_name ,phone  
    })
    let msg ="";
    if (createUser) {
        msg = "success";
        
    }
    else{
        msg = "fail";
    }
    res.send({
        status : 200,
        data : req.body,
        msg : msg
    })

})


app.listen(port, () => {
    console.log(`Server Running On Port No. :- ${port} 😻`);
  });