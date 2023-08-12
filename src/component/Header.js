import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className='d-flex justify-between align-center'>
        <div><h1 className='p-20'>Blog Junior</h1></div>
        <div className='d-flex'>
          <ul className='nav d-flex clear'>
            <li className='p-10'> <NavLink  to="/"> Authors </NavLink></li>
            <li className='p-10'> <NavLink to="/MostCommentPost"> MostCommentPost</NavLink></li>
            <li className='p-10'><NavLink to="/MostLikePost"> MostLikePost</NavLink></li>
          </ul>
        </div>
      </header>
  )
}
