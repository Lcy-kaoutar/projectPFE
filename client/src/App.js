// import logo from './logo.svg';
 import './App.css';
 import React, { Component } from 'react';
 import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
 //import '../src/index.css';
 import Router from "./Router";
 import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import axios from "axios";
import { AuthContextProvider } from './context/AuthContext';
import LandingPage from "./components/LandingPage";
import DetailPage from "./components/DetailPage";
import  CreateTable  from "./components/CreateTable";
import EditTable from "./components/EditTable";


 axios.defaults.withCredentials = true;





class App extends Component {
  render() {
    return (
      <div id="App">
      
        <Navbar/>
        
        <AuthContextProvider>
        
        <BrowserRouter>
        <Router/>
          <Route path="/tables/detail/:id" component={DetailPage} />
          <Route path="/add" component={CreateTable} />
          <Route path="/edit/:id" component={EditTable} />
       </BrowserRouter>
      </AuthContextProvider>
      </div>
    );
  }
}
//function App() {
//  return (
//    <>
//    
//    </>
//  );
//}

export default App;
