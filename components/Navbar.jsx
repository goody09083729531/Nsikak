import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';

import { Cart } from './';
import { useStateContext } from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  const myElementRef = useRef(null);
  const timesRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      timesRef.current.classList.remove('fa-times');
      myElementRef.current.classList.remove('active');
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    myElementRef.current.classList.toggle('active');
    timesRef.current.classList.toggle('fa-times');
  };

  return (
    <header>
      <a className="logo">Ndiana</a>
      <nav className="navbar" ref={myElementRef}>
        <Link href="/" className="active link">Home</Link>
        <Link href="/shop" className="link">Shop</Link>
        <Link href="/product/shop" className="link">About</Link>
        <Link href="/product/shop" className="link">Blog</Link>
        <Link href="" className="link">Contact</Link>
      </nav>
      <div className="icons">
        <i className="fas fa-bars" id="menu-bars" ref={timesRef} onClick={handleClick}></i>
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-twitter"></i>
        <i className="fa-solid fa-cart-shopping" onClick={() => setShowCart(true)}></i>
        <span className="cart-item-qty">{totalQuantities}</span>
      </div>

      {showCart && <Cart />}
    </header>
  )
}

export default Navbar