import React from 'react';

const Quote = ({quote}) => {
const {_id, name, img,message} = quote;
  return (
    <div class="card w-96 bg-base-100 shadow-2xl mt-5">
      <img style={{height:100, width:100}} src={img} alt="person" class="rounded-full mx-auto" />
      <div class="card-body items-center text-center">
      <h2 class="card-title">{name}</h2>
      <p>{message}</p>
    </div>
  </div>
  );
};

export default Quote;