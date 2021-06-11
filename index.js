const express = require("express");
const mongoose = require("mongoose");
const dotenv= require("dotenv");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const bodyParser = require("body-parser");




//setup server

dotenv.config();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(PORT));

app.use(express.json());
//app.use(express.json());


app.use(cookieParser());
app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true,
}));

// app.get("/test",(req,res)=>{
//     res.send("It works");
// });

//mongodb+srv://dbadmin:<password>@cluster0.psk3d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

//1234567*
//connect to mongodb

mongoose.connect(
    process.env.MDB_CONNECT,
    {
        //useNewUrlParser= true,
       // useUnifiedTopology= true,
    },
    (err)=>{
    if (err) return console.error(err);
    console.log("connected to mongodb")

    
});
// set up router
app.use("/auth",require("./routers/userRouter"));

app.use("/tables", require("./routers/tableRouter"));
