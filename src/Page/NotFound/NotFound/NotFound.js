import React from 'react';
import img from '../../../backEndimg/notfound.jpg'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="text-center p-5">
            <img height='400px' src={img} alt="" />
            <br />

            <Link to="/home">Back To Home </Link>
        </div>
    );
};

export default NotFound;