import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import './Addproduct.css'

const Addproduct = () => {
    // Add Products Section

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const defaultImg = 'https://i.ibb.co/1GJ00hr/77305990.jpg';

    const onSubmit = (data) => {

        const addData = window.confirm('Are You Sure, You Add This Service')


        axios.post(`https://intense-cove-94957.herokuapp.com/addProduct`, data)
            .then(result => {
                if (addData) {
                    if (result.data.insertedId) {
                        alert('You Product Add Successflly');
                        reset();
                    }
                }
            })
    }

    return (
        <div>
            {/* ADD SERVICE Section */}
            <div className="container mb-4 add-service">
                <h2 className="text-center mb-3">Add a new Cars</h2>
                <div className="form-container">
                    {/* FORM SECTION */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input defaultValue='' placeholder="Car Name...."  {...register("name", { required: true })} />
                        <br />
                        {errors.name && <span className="text-danger">This field is required</span>}<br />

                        <input defaultValue={defaultImg} placeholder="Image URL" {...register("image", { required: true, },)} />
                        <br />
                        {errors.image && <span className="text-danger">This field is required</span>}<br />

                        <textarea defaultValue='' placeholder="Description Add 100 Word+ " {...register("description", { required: true })} />
                        <br />

                        {errors.description && <span className="text-danger">This field is required</span>}<br />

                        <input defaultValue='' placeholder="Cars Cost...." type="number" {...register("charge", { required: true })} />
                        <br />
                        {errors.charge && <span className="text-danger">This field is required</span>}<br />

                        <button className="btn addBtn" type="submit">Add Booking</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Addproduct;