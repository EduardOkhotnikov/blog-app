import React from 'react';
import Bill from "./../img/1.jpg";
import './../App.css';
import { NavLink } from 'react-router-dom';

export default function Author() {
  return (
    <div className='card d-flex flex-column align-center p-20 m-20'>
        <img src={Bill} width={200} heigh={150} alt="img" />
        <p>Bill gates</p>
        <button><NavLink  to="/Detail">Detail</NavLink></button>
      </div>
  )
}
