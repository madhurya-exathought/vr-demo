import React from 'react';
import Header from '../../common/Header';

function Home() {
  console.log('asas', process.env.NODE_ENV, process.env.REACT_APP_ENV);

  return (
    <>
      <Header />
      Home Component
    </>
  );
}

export default Home;
