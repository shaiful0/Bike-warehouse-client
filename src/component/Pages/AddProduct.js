import React from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);
    const url = `https://desolate-escarpment-09661.herokuapp.com/services`;
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(result => console.log(result))
  };


  return (
    <div className='flex justify-center'>
      <div className='card w-96 bg-base-100 shadow-2xl '>
        <h1 className='text-center text-3xl font-bold mt-3'>Add Product</h1>
        <div className='card-body items-center text-center'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input
                type="name"
                placeholder="Type here Name"
                class="input input-info w-96 max-w-xs"
                {...register("name", { required: true })} />
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Type here Email"
                class="input input-info w-96 max-w-xs"
                {...register("email", { required: true })} />
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Description</span>
              </label>
              <textarea
                type="text"
                placeholder="Type here Discription"
                class="input input-info w-96 max-w-xs"
                {...register("description", { required: true })} />
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Supplier Name</span>
              </label>
              <input
                type="text"
                placeholder="Type here supplier Name"
                class="input input-info w-96 max-w-xs"
                {...register("supplier name", { required: true })} />
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Price</span>
              </label>
              <input
                type="number"
                placeholder="Type here Price"
                class="input input-info w-96 max-w-xs"
                {...register("number", { required: true })} />
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Quantity</span>
              </label>
              <input
                type="number"
                placeholder="Type here quantity"
                class="input input-bordered input-info w-full max-w-xs"
                {...register("quantity", { required: true })} />
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Photo URL</span>
              </label>
              <input
                type="url"
                placeholder="Type here photo url"
                class="input input-bordered input-info w-full max-w-xs"
                {...register("img", { required: true })}
              />

            </div>
            <input className='btn btn-wide btn-success btn-outline mt-5' type="submit" value="add " />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;