import React from 'react';


const DashBoardHome = () => {

    // Admin And User Welcame Page

    const welcome = 'https://i.ibb.co/zhzW4Cw/welcame.jpg';
    return (
        <div>
            <img className='img-fluid' src={welcome} alt="" />
        </div>
    );
};

export default DashBoardHome;