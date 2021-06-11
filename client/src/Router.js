import React, { useContext } from "react";
//import { Navbar } from "react-bootstrap";
import { BrowserRouter , Route,Switch } from 'react-router-dom';
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import axios from "axios";
import AuthContext from "./context/AuthContext";
import LandingPage from "./components/LandingPage";
import CreateTable from "./components/CreateTable";
import DetailPage from "./components/DetailPage";
import EditTable from "./components/EditTable";

axios.defaults.withCredentials = true;
  function Router()
  {  
      const {loggedIn} = useContext(AuthContext);
    return (
    <BrowserRouter>
     <Switch>
            <Route exact path="/">
                <div>Home</div>
            </Route>
            {loggedIn===false && <>
            <Route path="/register">
                <Register />
            </Route>
            <Route path="/login">
                <Login/>
            </Route>
            </>}
            {loggedIn===true && <>
            <Route path="/tables">
                <LandingPage />
            </Route>
            
            
           </>}
            
            
            
            
            
            
            
        </Switch>
    </BrowserRouter>
    );
    
    }
export default Router;