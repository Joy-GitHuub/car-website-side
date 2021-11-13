import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ServicesCard = ({ services }) => {
    const { _id, name, description, charge, image } = services
    return (
        // Home Page Service Card Component
        <div className=''>
            <Card className='mx-auto' style={{ width: '18rem', height: "100%" }}>
                <Card.Img variant="top" className="image" style={{ height: '200px' }} src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>

                    <Card.Text>
                        <h6 className='text-dark'>{description}</h6>

                    </Card.Text>
                    <Card.Text>

                        <h4>Charge: $ {charge}</h4>
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='border-0'>

                    {/* /topBookingDetails */}
                    <Link to={`/topBookingDetails/${_id}`}>
                        <button type="button" className="btn btn-primary btn-sm"> Buy-Car  <i className="fas fa-arrow-right"></i></button>
                    </Link>
                    {/* <button className="btn btn-primary">Location Booking </button> */}

                </Card.Footer>
            </Card>
        </div >
    );
};

export default ServicesCard;