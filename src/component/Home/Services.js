import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(`https://desolate-escarpment-09661.herokuapp.com/services`)
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])
  return (
    <div>
      <h2 className='text-3xl font-bold text-center text-cyan-500'>Our Services</h2>
      <div className='grid lg:grid-cols-3 md:grid-col-2 sm:grid-col-1  mt-2'>
        {
          services.slice(0, 6).map(service => <Service
            key={service._id}
            service={service}
          ></Service>)
        }
      </div>
    </div>
  );
};

export default Services;