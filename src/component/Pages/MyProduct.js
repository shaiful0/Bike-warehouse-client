import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProduct = () => {
  const [products, setProducts] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    const getProduct = async () => {
      const email = user.email;
      const url = `https://desolate-escarpment-09661.herokuapp.com/service?email=${email}`;
      const { data } = await axios.get(url, {
        headers: {
          authorization: `Bearer ${localStorage.getProduct('accessToken')}`
        }
      })
      setProducts(data);
    }
    getProduct();
  }, [user]);

  const handleDelete = id => {

  }
  return (
    <div>
      <h1>my items:{products.length}</h1>
      {
        products.map(product => <div key={product._id}>
          <div className='items'>
            <img style={{ height: "250px" }} src={product.img} alt="" />
            <h3>Name:{product.name}</h3>
            <p><small>Description:{product.description}</small></p>
            <p>Price:{product.price}</p>
            <p>Supplier Name:{product.supplier}</p>
            <button onClick={() => handleDelete(product._id)}>Delete</button>
          </div>
        </div>)
      }
    </div>
  );
};

export default MyProduct;