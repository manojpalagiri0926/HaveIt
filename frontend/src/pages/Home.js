import React from 'react';
import Idley from '../assets/Idley';
import { Footer } from '../components/Footer';
import '../styles/Home.css';
import Poori from '../assets/Poori';
import Main from '../assets/Main';

function Home() {
  return (
    <div>
    <div className="home-container">
      <p className="title">Best offers for you</p>
      <Idley />
      <hr className='hire'></hr>
      <p className="title">What's on your mind?</p>
      <Poori />
      <hr className='hire'></hr>
      <p className="title">Top restaurant chains</p>
      <Main/>
    </div>
    <Footer />
  </div>
  );
}

export default Home;
