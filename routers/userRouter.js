const router = require("express").Router();
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


router.post("/", async (req, res)=>{
     //res.send("test");
    // console.log(req,body);
    try {
         const{nom, prenom, domaine, matricule, email, password, passwordVerify}=req.body;
         // validation
        if(!nom || !prenom || !domaine || !matricule || !email || !password || !passwordVerify)
             return res
             .status(400)
             .json({errorMessage: "please enter all required fields."});

        if (password.length < 6) 
            return res
            .status(400)
            .json({errorMessage: "Please enter a password of at least 6 characters"})
            

        if (password!==passwordVerify) 
            return res
            .status(400)
            .json({errorMessage: "Please enter the same password twice"})
        


            const existingUser = await User.findOne({matricule});
        if(existingUser)
            return res.status(400).json({
                errorMessage: "An account with this matricule already exists."
            });
              
         
        // hash the password
        const salt= await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);
        console.log(passwordHash);
        // save a new user account to the db
        const newUser = new User({
            nom, prenom, domaine, matricule, email, passwordHash
        });
        const savedUser = await newUser.save();

        // sign the token

        const token = jwt.sign({
            
                user: savedUser._id,
            },
            process.env.JWT_SECRET);

           //  console.log(token);
        
            
        // send the token in a cookie
        res.cookie("token",token, {
            httpOnly: true,
        })
        .send();
        

    } catch (err) {
         console.error(err);
         res.status(500).send();
    }
   //res.send("test");
});
router.post("/login", async (req,res)=>{
    try {
        const{ matricule, password}=req.body;
        if( !matricule || !password )
            return res
             .status(400)
             .json({errorMessage: "please enter all required fields."});
             
            const existingUser = await User.findOne({matricule});
        if(!existingUser)
            return res
             .status(401)
             .json({errorMessage: "Wrong matricule or password."});
            const passwordCorrect = await bcrypt.compare(password, existingUser.passwordHash);
        if (!passwordCorrect)
            return res
            .status(401)
            .json({errorMessage: "Wrong matricule or password."});
 // sign the token

        const token = jwt.sign({
            
                user: existingUser._id,
            },
            process.env.JWT_SECRET);

           //  console.log(token);
        
            
        // send the token in a cookie
        res.cookie("token",token, {
            httpOnly: true,
        })
        .send();
// validate

    } catch (err) {
        console.error(err);
        res.status(500).send();
        
    }

});

router.get("/loggedIn",(req,res)=>{
    try {
        const token = req.cookies.token;
        if(!token) return res.json(false);
        jwt.verify(token, process.env.JWT_SECRET);
        res.send(true);
        
    } catch (error) {
       console.error(err);
       res.json(false);
    }
    

});

router.get("/logout",(req,res)=>{
    res.cookie("token", "", {
        httOnly: true,
        expires:new Date(0)
    })
    .send();
});
module.exports=router;