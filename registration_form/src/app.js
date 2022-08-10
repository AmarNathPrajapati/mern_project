const express = require('express')
const path  = require('path')
const hbs = require('hbs');
const app = express()
const port = 3000
//connecting with database
require("./db/conn.js");
//getting a table
const userTable = require('./models/register');
const { read } = require('fs');
//to getting posted data from json
app.use(express.json());
app.use(express.urlencoded({
  extended:false
}))
//getting path of static file
const static_path = path.join(__dirname,'../public');
const template_path = path.join(__dirname,'../templates/views');
const partials_path = path.join(__dirname,'../templates/partials');
// serving static file
app.use(express.static(static_path));
//setting view engine
app.set("view engine","hbs");
app.set("views",template_path);
hbs.registerPartials(partials_path)
//serving hbs file
app.get('/', (req, res) => {
  // res.send('Hello World!')
  res.render("index");
})
app.get('/register', (req, res) => {
  // res.send('Hello World!')
  res.render("register");
})
app.get('/login', (req, res) => {
  // res.send('Hello World!')
  res.render("login");
})
//create a new user
app.post('/register',async(req,res)=>{
  try{
    //getting posted gata
    const password = req.body.password;
    const cpassword = req.body.cpassword;
    const name = req.body.name;
    const phone = req.body.phone;
    const email = req.body.email;
    const message = req.body.message;
    const gender = req.body.gender;
    console.log(password,cpassword,name,email,phone,message,gender);
    if(password==cpassword){
      const data = new userTable({
        name:name,
        email:email,
        password:password,
        cpassword:cpassword,
        phone:phone,
        gender:gender,
        message:message
      })
      const UserData =await data.save();
      res.status(201).render("index");
    }else{
      res.send("password do not match");
    }
  }
  catch(error){
    res.status(400).send(error);
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})