import React, { useEffect, useState } from 'react';
import { set } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom'
const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const { img, name, description, price, quantity } = product;
  const [newQuantity, setNewQuantity] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const url = `https://desolate-escarpment-09661.herokuapp.com/services/${productId}`
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        if (data.quantity !== 'sold out') {
          setNewQuantity(parseInt(data.quantity));
        }
        else {
          setNewQuantity(data.quantity);
        }
      })
  }, []);

  const handleDelivered = () => {
    if (quantity) {
      const dropQuantity = newQuantity - 1;
      if (dropQuantity !== -1) {
        setNewQuantity(dropQuantity);
      }
      if (dropQuantity === 0) {
        setNewQuantity('sold out')
      }
    }
  };


  const handleAddQuantity = event => {
    event.preventDefault();
    const addQuantity = parseInt(event.target.addQuantityField.value);
    if (addQuantity > 0) {
      if (newQuantity === 'sold out') {
        const newAddQuantity = addQuantity;
        setNewQuantity(newAddQuantity);
      } else {
        const newAddQuantity = newQuantity + addQuantity;
        setNewQuantity(newAddQuantity);
      }
    }
  }

  useEffect(() => {
    const url = `https://desolate-escarpment-09661.herokuapp.com/updateQuantity/${productId}`;
    if (newQuantity && quantity) {
      fetch(url, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ newQuantity }),
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
        })
    }
  }, [newQuantity]);


  const handleManageProduct = () => {
    navigate('/manageProduct')
  }

  return (
    <div>
      <div className='flex'>
        <div class="card w-96 bg-base-100 shadow-2xl m-10">
          <figure><img style={{ height: 300 }} src={img} alt="Shoes" /></figure>
          <div class="card-body">
            <h2 class="card-title">{name}</h2>
            <p>Discription:{description}</p>
          </div>
        </div>
        <div className='mx-96 mt-10'>
          <h2>Name:{name}</h2>
          <p>Price:{price}</p>
          <p>Quantity:{quantity}</p>
          <div>
            <form onSubmit={handleAddQuantity}>
              <div className='flex m-1 my-3 '>
                <input className='btn btn-success mx-2' type='submit' value='Restock' />
                <input className='input input-bordered input-success w-full max-w-xs' type="number" name="addQuantityField" id="addQuantityField" />
                <button onClick={handleDelivered} className='btn btn-success mx-3'>Deiliverd</button>
              </div>

            </form>
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <button onClick={handleManageProduct} className='btn btn-success '>Manage all Products</button>
      </div>
    </div>
  );
};

export default ProductDetail;