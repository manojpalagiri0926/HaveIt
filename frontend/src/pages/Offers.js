import React from 'react'
import Idley from '../assets/Idley'
import Main from '../assets/Main'

function Offers() {
  return (
    <div className="home-container">
      <p className="title">Best offers for you</p>
      <Idley />
    <div style={{ marginTop: '50px' }}>
      <hr></hr>
      <div style={{ margin: '20px' }}>
      <p className="title">Order Now to get more offers</p>
      <Main/>
      </div>
      </div>
    </div>
  )
}

export default Offers
