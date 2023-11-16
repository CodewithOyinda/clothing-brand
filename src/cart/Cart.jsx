import React, { useState } from 'react';
import Nav from '../nav/Nav';
import BottomNav from '../bottomNav/BottomNav';
import '../cart/Cart.css';
import { Link } from 'react-router-dom';
import { AiFillCloseCircle } from 'react-icons/ai';
import { RiDeleteBin6Line } from 'react-icons/ri';

const Cart = () => {
  
  

  

  // State to store the cart items
  const [cart, setCart] = useState([]);

  // Function to remove a product from the cart
  const removeProduct = (firstProduct) => {
    const updatedCart = cart.filter((item) => item.id !== firstProduct.id);
    setCart(updatedCart);
  };

  


  return (
    <div>
      <Nav/>
      <div className='modal'>
        <div className='header'>
          <h2>Shopping Cart</h2>
          <Link to='/' className='btn close-btn'>
            <button >
              <AiFillCloseCircle size={30} />
            </button>
          </Link>
        </div>
        <div className='cart'>
          {cart.length === 0 ? (
            <span className='empty-text'>
              <h1>Your cart is empty</h1>
              <div>
                <h1>Please go back to the homepage to shop for an item...</h1>
              </div>
              <div>
                <Link to='/'>
                  <button className='homepage'>
                    Go to Homepage
                  </button>
                </Link>
              </div>
            </span>
          ) : (
            cart.map((firstProduct) => (
              <div className='cart-product' key={firstProduct.id}>
                <img src={firstProduct.img} alt={firstProduct.product} />
                <div className='product-info'>
                  <h3>{firstProduct.product}</h3>
                  <span className='product-price'>
                    {firstProduct.newPrice}
                  </span>
                </div>
                <button className='btn remove-btn' onClick={() => removeProduct(firstProduct)}>
                  <RiDeleteBin6Line size={20} />
                </button>
              </div>
            ))
          )}
          {cart.length > 0 && (
            <button className='btn checkout-btn'>Proceed to checkout</button>
          )}
        </div>
      </div>
      <BottomNav />
    </div>
  );
}

export default Cart;
