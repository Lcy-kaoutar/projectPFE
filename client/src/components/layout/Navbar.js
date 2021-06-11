import React from 'react';
import { Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap';
import AuthContext from '../../context/AuthContext';
import './Navbar.css';
import { useContext } from "react";
import LogOutBtn from "../auth/LogOutBtn";



function NavbarBootstrap () 
{
    const { loggedIn } = useContext(AuthContext);
    console.log(loggedIn);
    
    
 return(
    <div>
        <div className="row">
            <div className="col-md-12">      
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="./">
                    <img
                    src="https://drive.google.com/file/d/18fhulNYS_Bsjhpu-xq8EGxjRi64pQPTi/view?usp=sharing"
                    width="30"
                    height="30"

                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="./">Home</Nav.Link>
                    {loggedIn === false && (
                        <>
                        <Nav.Link href="./login">Log in</Nav.Link>
                        <Nav.Link href="./register">Register</Nav.Link>
                        </>
                    )}
                        
                        {loggedIn === true && (
                        <>
                        <Nav.Link href="./tables">Tables</Nav.Link>
                        <Nav.Link href="./processus">Processus</Nav.Link>
                        <Nav.Link href="./domaine">Domaines</Nav.Link>
                        <div variant="outline-success">
                        <LogOutBtn />
                        </div>
                        </>
                    )}
                   
                        
                   
                  
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                
                    </Form>
                   
                </Navbar.Collapse>
            </Navbar>
            <div class="container">
            <div class="row mt-3">
            </div>
            </div>
            </div>
        </div>
    </div>  
      
 )    
};

export default NavbarBootstrap;