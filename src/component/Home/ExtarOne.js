import React from 'react';

const ExtarOne = () => {
  return (
    <div class="bg-base-200">
      <div class="hero-content mx-20 flex-col lg:flex-row-reverse">
        <img style={{ height: 400, width: 900 }} className='mx-10 rounded-2xl' src={`https://media.istockphoto.com/photos/close-up-of-hands-shopping-online-picture-id691972324?k=20&m=691972324&s=612x612&w=0&h=dF33ugriKc0Mt7MAahHt5rwKMV7MiiWh78NiZR5r3TA=`} alt="" />
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <div class="form-control">
              <h1 className='text-4xl font-bold'>Drop a Meassage</h1>
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input type="text" placeholder="email" class="input input-bordered" />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Message</span>
              </label>
              <textarea type="text" placeholder="Type your message" class="input input-bordered" />
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-success btn-outline">send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtarOne;