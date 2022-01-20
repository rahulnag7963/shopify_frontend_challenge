import React from 'react';
import Navbar from '../Navbar';
import Photo from './Photo';
import {Stack} from 'react-bootstrap';
const Home = () => {
        return (
        <div>
            <Stack gap={3}>
                <Navbar/>
                <Photo/>
            </Stack>    
        </div>
        )};

export default Home;
