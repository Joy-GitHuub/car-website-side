import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ExploreServicesCard.css'

const ExploreServicesCard = ({ services }) => {
    const { _id, name, image, description, charge } = services;

    // ExploreServices Card Section


    return (
        <div className=''>
            <Card className='mx-auto card-section' style={{ width: '18rem', height: "100%" }}>
                <Card.Img variant="top" className="image" style={{ height: '200px' }} src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>

                    <Card.Text>
                        <h6 className='text-dark'>{description}</h6>
                        <h4>Charge: $ {charge}</h4>
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='border-0'>

                    <Link to={`/bookingDetails/${_id}`}>
                        <button type="button" className="btn btn-success px-5">Buy-Car <i className="fas fa-arrow-right"></i></button>
                    </Link>
                    {/* <button className="btn btn-primary">Location Booking </button> */}

                </Card.Footer>
            </Card>
        </div>
    );
};

export default ExploreServicesCard;