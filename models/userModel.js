const mongoose= require("mongoose");
const userSchema=new mongoose.Schema({
nom:{type: String, required: true},
prenom:{type: String, required: true},
domaine:{type: String, required: true},
email:{type: String, required: true},
matricule:{type: String, required: true},
passwordHash: {type: String, require:true},




});

const User = mongoose.model("user",userSchema);
module.exports=User;
