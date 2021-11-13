import React, { useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import { useForm } from 'react-hook-form';





const ManageAllProducts = () => {


    const [allBooking, setAllBooking] = useState([]);
    // const [orders, setOrders] = useState([]);
    const { register, handleSubmit } = useForm();

    // const [status, setStatus] = useState("");
    const [orderId, setOrderId] = useState("");



    useEffect(() => {
        const url = `https://intense-cove-94957.herokuapp.com/allEvents`;
        fetch(url)
            .then(res => res.json())
            .then(data => setAllBooking(data))
    }, [allBooking]);





    const handleDelete = (id) => {
        const deleteSure = window.confirm('Are You Sure You Delete Your Booking');
        if (deleteSure) {
            const url = `https://intense-cove-94957.herokuapp.com/allEvents/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Delete SuccesFully')
                        const remaining = allBooking.filter(order => order._id !== id);
                        setAllBooking(remaining);
                    }
                })
        }
    }



    const handleOrderId = (id) => {
        setOrderId(id);
        console.log(id);
    };

    const onSubmit = (data) => {
        console.log(data, orderId);
        fetch(`https://intense-cove-94957.herokuapp.com/statusUpdate/${orderId}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
    };



    return (
        <div className="allOrder ">

            <div className="container ">
                <h2 className="text-center my-4">Manage All <span style={{ color: "#ED1C24" }}>Orders</span></h2>
                <Table striped bordered hover size="sm" responsive='sm'>
                    <thead className='text-center'>
                        <tr>
                            <th>SL.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    {

                        !allBooking.length ? <div className="text-center mx-auto">
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden mx-auto">Loading...</span>
                            </Spinner>
                        </div> :
                            <tbody>
                                {
                                    allBooking?.map((order, index) => <>
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{order.UserName}</td>
                                            <td>{order.email}</td>
                                            <td>{order.city}</td>
                                            <td>{order.productName}</td>
                                            <td>{order.price}</td>
                                            {
                                                order.status === 'pending' ? <td className="text-danger fw-bold">{order.status}</td> : <td className="text-success fw-bold">{order.status}</td>
                                            }
                                            <td>
                                                <form onSubmit={handleSubmit(onSubmit)}>
                                                    <select
                                                        onClick={() => handleOrderId(order._id)}
                                                        {...register("status")}
                                                    >
                                                        {/* <option value={order?.status}>padding</option> */}
                                                        {/* <option defaultValue=''>Pending</option> */}
                                                        <option Value="Shiping">Shiping</option>
                                                    </select>

                                                    <button type='submit' className='btn btn-primary btn-sm'>Submit</button>

                                                </form>
                                            </td>



                                            <td><button onClick={() => handleDelete(order._id)} title="Delete" className="btn btn-sm btn-danger"><i class="fas fa-trash-alt"></i></button></td>
                                        </tr>
                                    </>)
                                }
                            </tbody>}
                </Table>
            </div>

        </div>
    );
};

export default ManageAllProducts;