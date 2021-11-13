import React, { useEffect, useState } from 'react';
import ManageProduct from '../ManageProduct/ManageProduct';

const ManageProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const url = `https://intense-cove-94957.herokuapp.com/allServices`
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [products])

    return (
        <div >
            <h3>All Manage Products {products.length}</h3>

            <div className='row row-cols-1 row-cols-md-3 my-5 g-4 container'>
                {
                    products.map(product => <ManageProduct
                        key={product._id}
                        product={product}
                        id={product._id}
                    ></ManageProduct>)
                }
            </div>


        </div>
    );
};

export default ManageProducts;