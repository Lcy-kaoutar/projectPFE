import axios from "axios";
import React, {  useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";
import { useHistory } from "react-router";

//import Logo from "../src/components/auth/logo192.png";


 function Register ()
 
    {
    
        const [nom, setNom]=useState("");
        const [prenom, setPrenom]=useState("");
        const [matricule, setMatricule]=useState("");
        const [email, setEmail]=useState("");
        const [domaine, setDomaine]=useState("");
        const [password, setPassword]=useState("");
        const [passwordVerify, setPasswordVerify]=useState("");
        const {getLoggedIn} = useContext(AuthContext);
        const history = useHistory();


        
        async function register(e) {
            e.preventDefault();
            try {
                const registerData = {
                    nom,
                    prenom,
                    matricule,
                    email,
                    domaine,
                    password,
                    passwordVerify,
                    
                };
                await axios.post("http://localhost:5000/auth/", registerData);
                await getLoggedIn();
                history.push("/");

            } catch (err) {
                console.error(err);
            }
            
        }


        return (
            
           
            <form onSubmit={register}>
                
                    <div className="container h-100" >
                
                        <div className="row align-items-center h-100">
                            
                            <div className="col-6 mx-auto">
                                
                            <div className="form-group row">
                                    <h3>Register</h3>
                            </div>
                                    <div className="row align-items-center h-100">

                                        <div className= "ml-5  .bg-dark " >
                            
                                            <div className="form-group row"> 
                                                    <label>Nom</label>
                                                    <input type="text" 
                                                    className="form-control" 
                                                    placeholder="Entrer Nom" 
                                                    onChange = {(e)=> setNom(e.target.value)}
                                                    value = {nom}
                                                    />
                                            </div>

                                            <div className="form-group row">

                                                    <label>Prénom</label>
                                                    <input type="text" 
                                                    className="form-control" 
                                                    placeholder="Entrer Prénom"
                                                    onChange = {(e)=> setPrenom(e.target.value)}
                                                    value = {prenom}
                                                    />
                                            </div>

                                            <div className="form-group row">
                                                    <label>Email</label>
                                                    <input 
                                                    type="email" 
                                                    className="form-control" 
                                                    placeholder="Enter email" 
                                                    onChange = {(e)=> setEmail(e.target.value)}
                                                    value = {email}
                                                    />
                                            </div>
                                            <div className="form-group row">
                                                <label>Matricule</label>
                                                <input type="text" 
                                                className="form-control" 
                                                placeholder="Entrer matricule"
                                                onChange = {(e)=> setMatricule(e.target.value)}
                                                value = {matricule}
                                                />
                                            </div>
                                            <div className="form-group row">
                                                <label>Domaine</label>
                                                <input type="text" 
                                                className="form-control" 
                                                placeholder="Entrer domaine" 
                                                onChange = {(e)=> setDomaine(e.target.value)}
                                                value = {domaine}
                                                />
                                            </div>

                                            <div className="form-group row">
                                                <label>Mot de passe</label>
                                                <input type="password" 
                                                className="form-control" 
                                                placeholder="Enter password"
                                                onChange = {(e)=> setPassword(e.target.value)}
                                                value = {password}
                                                />
                                            </div>
                                            <div className="form-group row">
                                                <label>Verifier mot de passe</label>
                                                <input type="password" 
                                                className="form-control" 
                                                placeholder="Enter password" 
                                                onChange = {(e)=> setPasswordVerify(e.target.value)}
                                                value = {passwordVerify}
                                                />
                                            </div>

                                            <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                                            <p className="forgot-password text-right">
                                                Already registered <a href="#">log in?</a>
                                                <img
                                                    //src={"./public/logo192.png"}
                                                    src={"public\favicon.ico"}
                                                    alt=" "
                                                    width="30"
                                                    height="30"
                                                    />
                                            </p>
                                        </div>
                                    </div>
                                
                             </div>
                        </div>
                    </div>
                
                
                
                
            </form>
        );
        
    };


export default Register;