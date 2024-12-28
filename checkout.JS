import React from 'react';

const Checkout = () => {
  const handleCheckout = () => {
    // Implement checkout logic
    alert('Checkout successful!');
  };

  return (
    <div>
      <h2>Checkout</h2>
      <button onClick={handleCheckout}>Proceed to Checkout</button>
    </div>
  );
};

export default Checkout;
