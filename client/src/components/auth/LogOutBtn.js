import axios from "axios";
import { useHistory } from "react-router";
import AuthContext from "../../context/AuthContext";
import React, {  useContext } from "react";
//import { push } from 'react-router-redux';



function LogOutBtn() {
    const { getLoggedIn } = useContext(AuthContext);
    const history = useHistory();

    

    async function logOut() {
        await axios.get("http://localhost:5000/auth/logout");
        await getLoggedIn();
        //history.push("/");

        
    }
    return <button onClick={logOut} variant="outline-success"> Log out </button>;
    
};
export default LogOutBtn;