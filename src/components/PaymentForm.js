import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('sk_test_51P6IvuSIeiYlIgUlD4FN4bt5Nqk3B53XxPllgDjqyWSewYMNqULmMGESEfLamrXbE0bZVZC3opyHPVn5IlOybY4H00dn1pyxXv');

const PaymentForm = () => {
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const stripe = await stripePromise;

    // Call your backend server to create a payment intent or token
    // Send payment details to Stripe and handle response
    // Display success or error message to the user
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Card details:
        <CardElement />
      </label>
      {error && <div>{error.message}</div>}
      <button type="submit" disabled={!stripe}>Pay</button>
    </form>
  );
};

export default PaymentForm;
