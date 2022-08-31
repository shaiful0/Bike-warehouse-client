import React from 'react';

const Banner = () => {
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={"https://media.istockphoto.com/photos/the-engine-resolution-of-the-motorcycle-picture-id488965597?k=20&m=488965597&s=612x612&w=0&h=uvnj7uwKrQ_IGZDof-Ybj0Ba20JZbv5Y5YJ9FxJARPc="} />
        <div>
          <h1 class="text-5xl font-bold">Get the best price and best plan</h1>
          <p class="py-6">New to iStock? Enjoy special savings on everything we have to offer: videos, photos, illustrations, and music.</p>
          <button class="btn btn-accent">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;