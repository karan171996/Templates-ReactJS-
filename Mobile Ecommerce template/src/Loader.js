import React from 'react';
import loaderSrc from './assets/Loader.gif';
import './Loader.css';

const Loader = () =>(
  <div className="loader">
    <img
      style={{width:156}}
      alt="Loader icon"
      src={loaderSrc} />
  </div>
);
export default Loader;
