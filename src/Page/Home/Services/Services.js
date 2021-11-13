import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import ServicesCard from '../ServicesCard/ServicesCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`https://intense-cove-94957.herokuapp.com/addProduct`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        // Home Page Service Section
        <div>
            <div className=' container my-5'>
                <h3 className='find-out text-center'>Our Top-Selling Car <br /> ------------------------------ </h3>

                {
                    !services.length ? <div className="text-center">
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div> : <div className="row row-cols-1 row-cols-md-3 g-4 my-5">
                        {
                            services.slice(0, 6).map(services => <ServicesCard services={services} />)
                        }
                    </div>
                }

            </div>
        </div>
    );
};

export default Services;