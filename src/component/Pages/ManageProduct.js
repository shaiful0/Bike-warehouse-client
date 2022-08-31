import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useProduct from '../Hooks/useProduct';


const ManageProduct = () => {
  const [products, setProducts] = useProduct();

  const handleDelete = id => {
    const url = `https://desolate-escarpment-09661.herokuapp.com/services/${id}`;
    fetch(url, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const remaining = products.filter(product => product._id !== id);
        setProducts(remaining)
      })
  }

  return (
    <div>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
        {
          products.map(product => <div
            key={product._id}>
            <div class="card w-96 bg-base-100 shadow-2xl mt-5">
              <figure class="px-10 pt-10">
                <img style={{ height: 100, width: 100 }} src={product.img} alt="parts" class="rounded-xl " />
              </figure>
              <div class="card-body items-center text-center">
                <h2 class="card-title">{product.name}</h2>
                <p>{product.description}</p>
                <div class="card-actions">
                  <button onClick={() => handleDelete(product._id)} class="btn btn-success">Delete</button>
                </div>
              </div>
            </div>
          </div>)
        }
      </div>
      <div className='m-5 grid justify-center'>
        <Link to='/addProduct' class="btn btn-success btn-outline">Add new product</Link>
      </div>
    </div>
  );
};

export default ManageProduct;