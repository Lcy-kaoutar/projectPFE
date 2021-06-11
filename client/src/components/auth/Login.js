import axios from "axios";
import React, {  useContext,useState } from "react";
import AuthContext from "../../context/AuthContext";

//import Logo from "../src/components/auth/logo192.png";


 function Login ()
 
    {
    
        
        const [matricule, setMatricule]=useState("");
        const [password, setPassword]=useState("");
        const {getLoggedIn} = useContext(AuthContext);

        
        async function login(e) {
            e.preventDefault();
            try {
                const loginData = {
                    
                    matricule,
                    
                    password,
                   
                    
                };
                await axios.post("http://localhost:5000/auth/login", loginData);
                getLoggedIn();
            } catch (err) {
                console.error(err);
            }
            
        }


        return (
            
        
        <form onSubmit={login} >
                
    

                    
                
            <div class="d-flex justify-content-center align-items-center container ">  
    
                            
                <div className="col-6 mx-auto">
                                
                                
                    <div className="form-group row">
                        <h3>Login</h3>
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
                        <label>Mot de passe</label>
                        <input type="password" 
                        className="form-control" 
                        placeholder="Enter password"
                        onChange = {(e)=> setPassword(e.target.value)}
                        value = {password}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary" >Login</button>
                    <button type="submit"  style={{ marginLeft: '25px' }} className="btn btn-success">Signup</button>
                
                    {/* <p className="forgot-password text-right">
                        Already registered <a href="#">log in?</a> 
                       
                    </p>*/}
                                        
                                    
                                
                </div>
                        
                    
            </div>
                
      
        </form>
       
    );
};


export default Login;