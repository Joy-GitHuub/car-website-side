import React from 'react';
import './Banner.css'

const Banner = () => {


    // Banner Section Start
    return (
        <div className='text-center my-5'>
            <div className=' banner '>
                <div className='p-5 text-light '>
                    <h2>Find Your Dream Cars..</h2>
                    <h1 className='carsCompany-name'>Ca-<span className='text-primary'>Leader</span></h1>

                    <h6 className='mt-3'>We offer high quality vehicles at unbelievable

                        prices & creates pleasant buying experience.</h6>


                    <div>
                        <button className='btn btn-outline-warning text-light mt-3  mx-3 '>GET STATED NOW &nbsp;<i className="fas fa-arrow-right fs-5"></i></button>
                        <button className='btn btn-outline-warning text-light mt-3  mx-auto '>LEARN MORE &nbsp; <i className="fas fa-arrow-right fs-5"></i></button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;