import React , { useState, useEffect} from 'react';
import {Spinner, Card, Container} from 'react-bootstrap';
import Like from './Like';

const Photo = () => {
    const [Photo,setPhoto] = useState(null);

    useEffect(() => {

        getPhoto();

        async function getPhoto() {
            const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=SbUNPf8O3FZgQJOfefBRypd4V0LXXXA1SlWNvH90`);
        
            const data = await res.json();
            setPhoto(data);
        }
        },[]);
        
        if(!Photo){
            return (  
            <Spinner animation= 'border' variant= 'primary' />
            )}

            return ( 
            <div>
                <Container fluid>
                    <Card style={{ width: '80rem' }}>
                        <Card.Img variant='top' src={Photo.url} />
                            <Card.Body>
                                <Card.Title>{Photo.title}</Card.Title>
                                    <Card.Text>
                                        <p class='fw-light'>{Photo.date}</p>   
                                        {Photo.explanation}
                                    </Card.Text>
                                    <Like/>
                            </Card.Body>
                    </Card>
                </Container>
            </div>
  )};

export default Photo;
