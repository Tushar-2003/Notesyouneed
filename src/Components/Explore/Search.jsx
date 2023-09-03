import React from 'react';
import './Search.css';
import Eye from '../../images/eye.svg';

function Search() {
  return (
    <div className='search'>
      <img className='eyeim' src={Eye} alt=' ' />
      <div className='itms'>
      <h2 className='ith'>Tap on search tab</h2>
      <p className='itp'>Find the Notes, Books,Question Papers, Videos everything </p>
      <a href=' '> <button className='btss'>Search</button></a>
      </div>
    </div>
  )
}

export default Search
