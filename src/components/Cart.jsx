import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js'; // Import Stripe.js
import './cart.css';

// Initialize Stripe
const stripePromise = loadStripe('pk_test_51BTUDGJAJfZb9HEBwDg86TN1KNprHjkfipXmEDMb0gSCassK5T3ZfxsAbcgKVmAIXF7oZ6ItlZZbXO6idTHE67IM007EwQ4uN3'); // Replace with your actual Stripe publishable key

const Cart = () => {
  const location = useLocation();
  const initialCartData = location.state?.cartData || [];

  const [cartData, setCartData] = useState(initialCartData);
  const [itemCounts, setItemCounts] = useState(
    initialCartData.map(item => item.quantity)
  );

  const handleDecrement = (index) => {
    setItemCounts(prevCounts => {
      const newCounts = [...prevCounts];
      newCounts[index] = Math.max(1, newCounts[index] - 1);
      return newCounts;
    });
  };
  const handleIncrement = (index) => {
    setItemCounts(prevCounts => {
      const newCounts = [...prevCounts];
      newCounts[index] = newCounts[index] + 1;
      return newCounts;
    });
  };
  const handleRemove = (index) => {
    setCartData(prevCart => prevCart.filter((_, i) => i !== index));
    setItemCounts(prevCounts => prevCounts.filter((_, i) => i !== index));
  };

  const totalCost = cartData.reduce((total, item, index) => {
    return total + item.rate * itemCounts[index];
  }, 0);

  // Handle payment when the "Proceed to Checkout" button is clicked
  const handlePayment = async () => {
    const amount = Math.round(totalCost * 1.05 * 100); // Convert to smallest currency unit (paise)
    
    // Send request to backend to create payment session
    const response = await fetch(`${window.location.origin}/api/payment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount, currency: 'inr' }), // Specify currency as INR
    });

    const session = await response.json();

    // Redirect to Stripe Checkout
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({ sessionId: session.id });

    if (error) {
      console.error('Error redirecting to checkout:', error);
    }
  };

  return (
    <div className='cart_component'>
      <h1>Your Cart ({cartData.length}) items</h1>
      <div className='cart_line'></div>
      {cartData.length > 0 ? (
        <ul>
          {cartData.map((item, index) => (
            <li key={index} className='cart_list' id={`item-${index}`}>
              <div className='cart_name'>
                <p>{item.name}</p>
              </div>
              <p><strong></strong> ₹{item.rate}</p>
              <div className="number cart_black">
                <span className="minus" onClick={() => handleDecrement(index)}>-</span>
                <input type="text" value={itemCounts[index]} readOnly />
                <span className="plus" onClick={() => handleIncrement(index)}>+</span>
              </div>
              <button onClick={() => handleRemove(index)}>Remove</button>
              <p>₹{(item.rate * itemCounts[index]).toFixed(2)}</p>
            </li>
          ))} 
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
      <div className='cart_line'></div>
      <h3 className="spaced-text">Total Cost: ₹{totalCost.toFixed(2)}</h3>
      <div className='carted_fixed'>
        <p className='cart_Total_text'>Total Cost:
          <span className='cart_Total'>
            ₹{(totalCost * 1.05).toFixed(2)}
          </span>
        </p>
        <p className='cart_sub'>₹{totalCost.toFixed(2)} + ₹{(totalCost * 0.05).toFixed(2)} (taxes)</p>
        <button onClick={handlePayment}>Proceed To Checkout</button> {/* Trigger the payment */}
      </div>
    </div>
  );
};

export default Cart;
