import React, { useState } from 'react';
import { Details } from '../collections/Details';
import Nav from '../nav/Nav';
import BottomNav from '../bottomNav/BottomNav';
import '../productList/productList.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ItemOne = () => {
  const firstProduct = Details[0];
  const navigate = useNavigate();
  console.log(Details);

  // State for the quantity of the product
  const [quantity, setQuantity] = useState(1);

  // State for the notification visibility
  const [showNotification, setShowNotification] = useState(false);

  // Function to increase the quantity
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Function to decrease the quantity
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addToCart = () => {
    navigate('/cart');
    setShowNotification(true);
    setQuantity(1);

  };

  return (
    <div>
      <Nav/>
      <div key={firstProduct.id} className='productflex'>
        <div>
          <img src={firstProduct.img} alt={firstProduct.product} />
        </div>
        <div>
          <h1>{firstProduct.product}</h1>
          <div className='prices'>
            <del>
              <h5>{firstProduct.oldPrice}</h5>
            </del>
            <p>{firstProduct.newPrice}</p>
          </div>
          <p className='description-p'>{firstProduct.description}</p>
          <div className='cartquantity'>
            <div className='quantity'>
              <p className='quant-p'>Quantity</p>
              <button onClick={decreaseQuantity}>-</button>
              <p>{quantity}</p>
              <button onClick={increaseQuantity}>+</button>
            </div>
            <div className='add-btn'>
              <button onClick={addToCart}>Add to Cart</button>
            </div>
          </div>
          <div className='category'>
            <h5>Category: {firstProduct.category}</h5>
            <Link to='/'><h4>Continue shopping</h4></Link>
          </div>
        </div>
      </div>
      <BottomNav />
      {showNotification && (
        <div className="notification">Product added to cart!</div>
      )}
    </div>
  );
};

export default ItemOne;
