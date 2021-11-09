import React from 'react';
import logo from '../autofleet.gif';
import {useHistory} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Link } from "react-router-dom";

const HomePage = () => {
    const history = useHistory();
    
    function handleClick() {
        history.push('/map');
    }
    return (
        <div className="App">
            <header className="autofleet-logo">
            <img src={logo} className="App-logo" alt="logo" onClick={handleClick}/>
            <div>
            <p style={ {paddingTop: '50px'}}>
                Welcome to the vehicle map of the city London!
            </p>
            <div className="d-grid gap-2">
            </div>
            <Button variant="primary" size="lg">
            <Link to="/map">Enter Map </Link> 
            </Button>
            </div> 
            </header>
        </div>
    );
}
export default HomePage;
