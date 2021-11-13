import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import ExploreServicesCard from '../ExploreServicesCard/ExploreServicesCard';
import './ExploreAllServices.css'

const ExploreAllServices = () => {

    const [allServices, setAllServices] = useState([]);

    useEffect(() => {
        const url = `https://intense-cove-94957.herokuapp.com/addProduct`
        fetch(url)
            .then(res => res.json())
            .then(data => setAllServices(data))
    }, [allServices])
    return (
        <div className='explore-section '>
            <h3 className='text-center find-out'> Explore All Cars</h3>

            {
                !allServices.length ? <div className="text-center">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div> : <div className="row row-cols-1 row-cols-md-3 g-4 my-5 mx-auto">
                    {
                        allServices.map(services => <ExploreServicesCard
                            key={services.id}
                            services={services} />)
                    }
                </div>
            }
        </div>
    );
};

export default ExploreAllServices;