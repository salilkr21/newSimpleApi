require("dotenv").config();
const express=require("express");
const userRouter=require("./api/users/user.router");
const app=express();



app.use(express.json());

app.use("/api/users",userRouter);


app.listen(process.env.APP_PORT,()=>{
    console.log('listening at port is ',process.env.APP_PORT);
});