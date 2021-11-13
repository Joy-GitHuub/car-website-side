import React from 'react';
import about from '../../../images/banner_4_680x397_crop_top.png'
import Header from '../../Home/Header/Header'
import Footer from '../../Home/Footer/Footer'

const About = () => {
    return (
        <div >
            <Header></Header>
            <div className='container py-5'>
                <h2 className='text-center my-5 text-danger'>About-Us</h2>
                <div className='row row-cols-1 row-cols-md-3 g-4  trending-bg  my-5' >

                    <div className='col-lg-5 col-md-6 col-12 '>
                        <h4 className='my-3'>WELCOME !</h4>
                        <h2 className='mb-4'>ABOUT OUR STORE</h2>
                        <p>For 25 years, we raising the standard of used car retailing with one of the most innovative and reliable used vehicle programmes ever created. A comprehensive range of benefits as standard has evolved over time and, today, drivers can leave the forecourt with total reassurance and peace of mind.</p>
                        <button className='btn btn-dark mt-4'>Shop Now</button>
                    </div>
                    <div className='col-lg-7 col-md-6 col-12 '>
                        <img className='img-fluid' src={about} alt="" />
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default About;