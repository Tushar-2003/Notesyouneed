import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="contents">
        <h1>Grow smarter together</h1>
        <p className='prs'>Find top-rated study notes from students <br />taking the same courses as you.</p>
        <div className="buttons">
          <a href=' '><button className="btns__primary">Search</button></a>
          <a href=' '><button className="btns__secondary">Contribute</button></a>
        </div>
      </div>
    </div>
  );
}

export default Home;
