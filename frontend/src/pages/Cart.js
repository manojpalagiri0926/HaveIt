import React from 'react';
import cart from '../media/cart.png';
import { Link } from 'react-router-dom';

function Cart() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '85vh',
        padding: '20px', // Add padding for better spacing
      }}
    >
      <img src={cart} alt="Shopping Cart" style={{ maxWidth: '100%', height: 'auto' }} />
      <p style={{ fontSize: '1.5rem', textAlign: 'center' }}><b>Your cart is empty</b></p>
      <p style={{ textAlign: 'center' }}>You can go to the home page to view more restaurants</p>
      <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
        <button
          style={{
            marginTop: '10px',
            backgroundColor: 'orange',
            color: 'white',
            padding: '10px 20px',
            fontSize: '1rem',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          See Restaurants Near You
        </button>
      </Link>
    </div>
  );
}

export default Cart;
