import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component{
    render() {
        return (
                <Jumbotron>
                    <h2>Val Memoirs || Sharing romantic experiences</h2>
                    <p>Spend time planning of beautiful, romantic dates for two, it has always been my desire to help people, share their lovely experiences.</p>
                <Link to="/about">
                    <Button bsStyle="primary">About</Button>
                </Link>
                </Jumbotron>
            
        );
    };
};