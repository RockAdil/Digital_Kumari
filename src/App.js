import React from 'react';
import './App.scss';

import { Header, Products, Explore, About, Contact } from './container';
import { Navbar } from './components';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <Products />
      <Explore />
      <About />
      <Contact />
    </div>
  );
};

export default App;
