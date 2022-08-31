import React, { useEffect, useState } from 'react';
import Quote from './Quote';

const ExtarTwo = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch(`https://desolate-escarpment-09661.herokuapp.com/quote`)
      .then(res => res.json())
      .then(data => setQuotes(data))
  }, [])

  return (
    <div>
      <h1 className='text-3xl font-bold text-center'>Quotes</h1>
      <div className=' grid lg:grid-cols-3 md:grid-col-2 sm:grid-col-1 mx-5 my-5'>
        {
          quotes.map(quote => <Quote
            key={quote._id}
            quote={quote}
          ></Quote>)
        }
      </div>
    </div>
  );
};

export default ExtarTwo;