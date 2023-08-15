import React, { useRef } from 'react';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { BsFillTrash3Fill } from 'react-icons/bs';
import { useStateContext } from '../context/StateContext';
import Image from 'next/image';

import { urlFor } from '../lib/client';

const Cart = () => {
  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity } = useStateContext();
  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
      <button
        type="button"
        className="cart-heading"
        onClick={() => setShowCart(false)}>
        <AiOutlineLeft />
        <span className="heading">Your Cart</span>
        <span className="cart-num-items">({totalQuantities} items)</span>
      </button>

        {cartItems.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping size={150} />
            <h3>Your Cart is Empty</h3>
            <Link href="/">
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className="btn"
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}

        <div className="product-container">
          {cartItems.length >= 1 && cartItems.map((item) => (
            <div className="product" key={item._id}>
              <Image src={urlFor(item?.image[0]).url()} className="cart-product-image" width={180} height={150} quality={100} layout="intrinsic" alt="" />
              <div className="item-desc">
                <div className="flex top">
                  <h5>{item.name}</h5>
                  <h4>₦{item.price}</h4>
                </div>
                <div className="flex bottom">
                  <div>
                  <input className="me" type="number" min="1" max="100000" value={totalQuantities} defaultValue="1" />
                  </div>
                  <button
                    type="button"
                    className="remove-item"
                    onClick={() => onRemove(item)}
                  >
                    <BsFillTrash3Fill />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {cartItems.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>Subtotal:</h3>
              <h3>₦{totalPrice}</h3>
            </div>
            <div className="btn-container">
              <Link href="/checkout">
                <button type="button" className="btns" onClick={() => setShowCart(false)}>
                  Make Payment
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart