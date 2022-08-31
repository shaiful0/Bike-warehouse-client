import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
  const { _id, name, img, description, price, quantity } = service;
  const navigate = useNavigate();
  const navigateToProductDetail = id => {
    navigate(`/service/${_id}`)
  }
  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-2xl mt-5 mx-20">
        <figure class="px-10 pt-10">
          <img style={{ height: '200px', width: '250px' }} src={img} alt="Shoes" class="rounded-xl w-52" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{name}</h2>
          <p>{description}</p>
          <p>Price:${parseInt(price)}</p>
          <p>Quantity:{quantity}</p>
          <div class="card-actions">
            <button onClick={() => navigateToProductDetail(_id)} class="btn btn-success btn-outline">Update</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;