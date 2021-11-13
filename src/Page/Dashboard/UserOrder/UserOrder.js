import React, { useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth'

const UserOrder = () => {
    const { user } = useAuth();

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://intense-cove-94957.herokuapp.com/myBooking/${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user.email, orders])



    const handleDelete = (id) => {
        const deleteSure = window.confirm('Are You Sure You Delete Your Booking');
        if (deleteSure) {
            const url = `https://intense-cove-94957.herokuapp.com/myBooking/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('SuccessFully Delete');
                        const remaining = orders.filter(order => order._id !== id);
                        setOrders(remaining)
                    }
                })
        }

    }

    // All User Order Section
    return (
        <div className="allOrder ">
            <div className="container my-5 my-booking">
                <h2 className="text-center  mb-5">My <span style={{ color: "red" }}>Orders</span></h2>
                <Table striped bordered hover size="sm" responsive='sm'>
                    <thead >
                        <tr>
                            <th>#</th>
                            <th>User Name</th>
                            <th>User Email</th>
                            <th>Product</th>
                            <th>Address</th>
                            <th>Booking Cost</th>
                            <th>Phone.NO</th>
                            <th>Booking Status</th>
                            <th>Delete Your Order</th>
                        </tr>
                    </thead>

                    {
                        !orders.length ? <div className="text-center mx-auto">
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden mx-auto">Loading...</span>
                            </Spinner>
                        </div> :

                            <tbody className=''>
                                {/* Map Orders */}
                                {
                                    orders.map((order, index) => <>

                                        <tr className='text-center align-items-center' key={order._id}>
                                            <td>{index + 1}</td>
                                            <td style={{ fontSize: '15px', }}>{user.displayName}</td>
                                            <td>{order.email}</td>
                                            <td>{order.productName
                                            }</td>

                                            <td> {order.city}</td>
                                            <td>{order.price}</td>
                                            <td>{order.phone}</td>
                                            {
                                                order.status === 'pending' ? <td className="text-danger fw-bold">{order.status}</td> : <td className="text-success fw-bold">{order.status}</td>
                                            }
                                            <td>
                                                <button
                                                    onClick={() => handleDelete(order._id)}
                                                    type="button" className="btn btn-dark "><i className="fas fa-trash text-danger"></i></button>
                                            </td>
                                        </tr>

                                    </>
                                    )
                                }




                            </tbody>

                    }

                </Table>
            </div>
        </div>
    );
};

export default UserOrder;