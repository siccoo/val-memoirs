import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component{
    render() {
        return (
            <Grid>
                <Jumbotron>
                    <h2>Val Memoirs || Sharing romantic experiences</h2>
                    <p>Spend time planning of beautiful, romantic dates for two, it has always been my desire to help people, share their lovely experiences.</p>
                <Link to="/about">
                    <Button bsStyle="primary">About</Button>
                </Link>
                </Jumbotron>
                <Row className="show-grid text-center">
                    <Col xs={12} sm={4} className="person-wrapper">
                    <Image src="asset/belisco.jpg" circle className="profile-pic" />
                    <h3>Mrs Gift Onyinye</h3>
                    <p>In her words Judic-O Couture brands need to integrate social commitments into their strategies and focus on attracting community members and building a winning business require the focus to resist doing too many things at once, while finding the right blend of fashion and technology. That is we focus only on female wears.</p>
                    </Col>

                    <Col xs={12} sm={4} className="person-wrapper">
                    <Image src="asset/ugonma.jpg" circle className="profile-pic" />
                    <h3>Jessy Chigo</h3>
                    <p>Indeed Judic-O Couture / Fashion Home is a home for the fashionistas. This is a place for practical knowledge, I'm very happy to be an alumni. </p>
                    </Col>

                    <Col xs={12} sm={4} className="person-wrapper">
                    <Image src="asset/emmanuel.jpg" circle className="profile-pic" />
                    <h3>Emmanuel Ike</h3>
                    <p>In her words Judic-O Couture brands need to integrate social commitments into their strategies and focus on attracting community members and building a winning business require the focus to resist doing too many things at once, while finding the right blend of fashion and technology. That is we focus only on female wears.</p>
                    </Col>
                </Row>
            </Grid>
        );
    };
};