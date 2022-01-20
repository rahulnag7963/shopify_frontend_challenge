import React from 'react';
import {Navbar, Container,Col }from 'react-bootstrap'
import image from './nasa-logo-web-rgb.png'

const navbar = () => {
return (
<div>
    <Navbar bg='primary' variant='light'>
        <Container>
          <Navbar.Brand> 
            <Col>
              <img src= {image}
                   width='160'
                   height='80'
                   className='d-inline-block align-top'
                   alt='Nasa'
              /> 
            </Col>
          </Navbar.Brand>
            <Col>
              <p class ='fs-1 text-white'> Nasa InstaJam </p>
            </Col>
        </Container>
    </Navbar>
  </div>);
};

export default navbar;
