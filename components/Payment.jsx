import React, { useState } from 'react';
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';
import { useStateContext } from '../context/StateContext';

export default function Payment() {
  const { totalPrice, cartItems, totalQuantities } = useStateContext();
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
   const config = {
    public_key: process.env.NEXT_PUBLIC_FLUTTERWAVE_PUBLIC_KEY,
    tx_ref: Date.now(),
    amount: totalPrice,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email,
      phone_number: `${phone}`,
      name,
    },
    customizations: {
      title: 'My store',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const fwConfig = {
    ...config,
    text: 'Pay Now',
    callback: (response) => {
       console.log(response);
      closePaymentModal()
    },
    onClose: () => {},
  };

  return (
      <div className="checkout-container">
      <form>
        <div className="checkout-row">
          <div className="checkout-col">
            <div className="inputBox">
              <span>Full Name: </span>
              <input type="text" placeholder="Enter your full name here..." onChange={handleNameChange} />
            </div>
            <div className="inputBox">
              <span>Phone Number: </span>
              <input type="number" placeholder="Enter your phone number here..." onChange={handlePhoneChange} />
            </div>
            <div className="inputBox">
              <span>E-Mail: </span>
              <input type="email" placeholder="Enter your email here" onChange={handleEmailChange} />
            </div>
            <div className="inputBox">
              <span>Amount: </span>
              <input type="number" value={totalPrice} readOnly />
            </div>
          </div>
        </div>
      </form>
      <FlutterWaveButton {...fwConfig} className="submit-btn" />
    </div>
  );
}