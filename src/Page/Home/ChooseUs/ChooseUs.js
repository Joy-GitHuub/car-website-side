import React from 'react';
import './ChooseUs.css'

const ChooseUs = () => {
    return (
        <div className='my-5'>
            <h3 className='find-out text-center'>WHY CHOOSE-US <br /> ------------------------------</h3>


            <div className='row row-cols-1 row-cols-md-3 g-4 container  mx-auto trending-bg  py-5' >
                <div className='col-lg-3 col-md-3 col-12 '>
                    <h6 className='heading'><i className="fas fa-check-circle heading fs-5"></i> &nbsp;FINANCING MADE EASY</h6>
                    <p className='details'>Our stress-free finance department that can find financial solutions to save you money.</p>
                </div>
                <div className='col-lg-3 col-md-3 col-12 '>
                    <h6 className='heading'><i className="fas fa-sun fs-5"></i> &nbsp;WIDE RANGE OF BRANDS</h6>
                    <p className='details'>With a robust selection of popular vehicles on hand, as well as leading vehicles from BMW and Ford.</p>
                </div>
                <div className='col-lg-3 col-md-3 col-12 '>
                    <h6 className='heading'><i className="fas fa-comments fs-5 heading"></i>
                        &nbsp; TRUSTED BY THOUSANDS</h6>
                    <p className='details'>10 new offers every day. 350 offers on site, trusted by a community of thousands of users.</p>
                </div>
                <div className='col-lg-3 col-md-3 col-12 '>
                    <h6 className='heading'><i className="fab fa-stack-exchange fs-5"></i>

                        &nbsp;   CAR SERVICE & MAINTENANCE</h6>
                    <p className='details'>Our service department maintain your car to stay safe on the road for many more years.</p>
                </div>

            </div>
            <div className='App'>
                <button type="button" className="btn btn-outline-primary "> <i className="fas fa-print"></i> &nbsp; LEARN MORE</button>
            </div>

        </div>
    );
};

export default ChooseUs;