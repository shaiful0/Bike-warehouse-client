import React from 'react';
import Banner from './Banner';
import ExtarOne from './ExtarOne';
import ExtarTwo from './ExtarTwo';
import Services from './Services';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <ExtarOne></ExtarOne>
      <ExtarTwo></ExtarTwo>
    </div>
  );
};

export default Home;