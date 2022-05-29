const express = require("express");
const employeeRouter = require("./router/employee")
const mongo=require('./shared/connect');
const dotenv=require('dotenv');


const app=express();
dotenv.config({ path:'./shared/.env'});

//middleware-for to convert req.body into json format
app.use(express.json());
mongo.connect(); 
app.use('/',(req,res,next)=>{
    // res.send("Divakar");
    //Authentication
    //authrization 
    console.log("hello middleware 1");
    next()
    // res.end("ended in middleware")
});
  
app.use('/employee',employeeRouter);

app.listen(process.env.PORT || 3000);

 





 








// const express = require("express");

// const app=express();
// //middleware-for to convert req.body into json format
// app.use(express.json());

// app.use('/',(req,res,next)=>{
//     // res.send("Divakar");
//     //Authentication
//     //authrization 
//     console.log("hello middleware 1");
//     next()
//     // res.end("ended in middleware")
// });

// app.use('/',(req,res,next)=>{
//     // res.send("Divakar");
//     //authrization check
//     console.log("hello middleware 2");
//     next()
//     // res.end("ended in middleware")
// });

// app.use('/users',(req,res,next)=>{
//     console.log("user middleware ")
//     next();
// })

// app.get('/',(req,res,next)=>{
//     res.send("this is homepage")
// })


// app.get('/users',(req,res,next)=>{
//     res.send({
//         name:'xxx',
//         age:25
//     });
// })


// app.get('/post',(req,res,next)=>{
//     res.send({
//         name:'yyy',
//         age:25
//     });
// })