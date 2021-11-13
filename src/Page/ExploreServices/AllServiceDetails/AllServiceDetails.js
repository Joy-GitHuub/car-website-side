import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router'
// import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Header from '../../Home/Header/Header';
import Footer from '../../Home/Footer/Footer';
import './AllServiceDetails.css'
import useAuth from '../../../hooks/useAuth';

const AllServiceDetails = () => {
    const { id } = useParams();

    const [services, setServics] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch(`https://intense-cove-94957.herokuapp.com/addProduct/${id}`)
            .then(res => res.json())
            .then(data => setServics(data))
    }, [id]);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    // const { carName, price, description, img } = services;



    const handleUser = (data, e,) => {
        const proceed = window.confirm('Are You Sure, You Buy This Car !!!');

        fetch(`https://intense-cove-94957.herokuapp.com/userBook`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(result => {
                if (proceed) {
                    alert('You Booking SuccessFully');
                    reset();
                }
            })



        e.preventDefault();

    }

    return (
        <>
            <Header></Header>
            <div className="container booking-details ">
                {/* Service Details Section */}
                <div className="row d-flex align-items-center ">
                    <div className="col-lg-6 col-md-6 col-12 text-center">
                        <img width="300px" height="300px" src={services.image} alt="" />
                        <h3 className='text-info'>{services?.name}</h3>
                        <h6 className="fw-bold  text-dark "><span className='text-danger'>Car Details:</span> {services.description}</h6>
                        <p className='text-primary'>Price:${services.charge}</p>

                    </div>
                    <div className="col-lg-6 col-md-6 col-12 form-container user-form">
                        <h3 className='text-danger text-center'>User Details</h3>
                        <form className="shipping-form" onSubmit={handleSubmit(handleUser)}>

                            <input defaultValue={user.displayName}  {...register("UserName", { required: true })} />
                            <br />{errors.UserName && <span className="text-danger">This field is required</span>}<br />

                            <input defaultValue={user.email} {...register("email", { required: true })} />
                            <br /> {errors.email && <span className="text-danger">This field is required</span>}<br />


                            <input hidden defaultValue='pending' {...register("status",)} />


                            <input defaultValue={services.name} {...register("productName", { required: true })} />
                            <br />{errors.productName && <span className="text-danger">This field is required</span>}<br />

                            {/* <input type="date" placeholder="Date" {...register('BookingDate', { required: true })} />
                            <br />{errors.BookingDate && <span className="text-danger">This field is required</span>}<br /> */}

                            <input placeholder="Address" defaultValue="" {...register("address", { required: true })} />
                            <br /> {errors.address && <span className="text-danger">This field is required</span>}<br />

                            <input placeholder="Your City" defaultValue="" {...register("city", { required: true })} />
                            <br /> {errors.city && <span className="text-danger" >This field is required</span>}<br />

                            <input defaultValue={services.charge} {...register("price", { required: true })} placeholder='Booking Cost' />
                            <br />{errors.price && <span className="text-danger">This field is required</span>}<br />



                            <input placeholder="phone number" defaultValue="" {...register("phone", { required: true })} />
                            <br /> {errors.phone && <span className="text-danger">This field is required</span>}<br />
                            <input type="submit" />
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default AllServiceDetails;