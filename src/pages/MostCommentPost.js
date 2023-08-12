import React from 'react';
import "./../App.css";
import { NavLink } from 'react-router-dom';

export default function MostCommentPost() {
  return (
    <ul className='LineLikes d-flex flex-column '>
        <NavLink to="/commentDetail">
    <div className='Like d-flex justify-between align-center'>
       <p >encryption</p>
       <p >12/10/2020</p>
       <p >Comments 16</p>
   </div></NavLink>
   <div className='Like d-flex justify-between align-center'>
   <p >encryption</p>
       <p >12/10/2020</p>
       <p >Comments 16</p>
   </div>        <NavLink to="/commentDetail:id"><div className='Like d-flex d-flex justify-between align-center'>
    
   <p >encryption</p>
       <p >12/10/2020</p>
       <p >Comments 16</p>
      
   </div>  </NavLink>       <div className='Like d-flex d-flex justify-between align-center'>
   <p >encryption</p>
       <p >12/10/2020</p>
       <p >Comments 16</p>
   </div>        <div className='Like d-flex d-flex justify-between align-center'>
   <p >encryption</p>
       <p >12/10/2020</p>
       <p >Comments 16</p>
   </div>
</ul>
  )
}
