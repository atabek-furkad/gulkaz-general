import React, { useContext } from 'react';
import UserContext from '../context/UserContext';
// import ProductsList from '../components/ProductsList'
import Carousel from '../components/Carousel';

const HomePage = () => {
  const { state } = useContext(UserContext);

  console.log('in home page', state);
  return (
    <div className='HomePage'>
      <h1>Home Page</h1>
      {/* <ProductsList /> */}
      <Carousel />
    </div>
  );
};

export default HomePage;
