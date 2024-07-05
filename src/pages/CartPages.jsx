import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCartProdsThunk, setCart } from '../store/slices/cart.slice';
import ItemCart from '../components/cartPage/itemCart';
import './styles/cartPage.css'
import { postPurchasesThunk } from '../store/slices/purchases.slice';

const CartPages = () => {

  const cart = useSelector((store) => store.cartSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartProdsThunk());
  }, []);
  
  const product = cart.reduce((cv, prod) => cv += prod.quantity, 0);
  // console.log(cart)

  const total = cart.reduce(
      (cv, prod) => cv += prod.quantity * prod.product?.price, 0);

  const handleBuy = () => {
    dispatch(postPurchasesThunk());
    dispatch(setCart([]));
  }

  return (
    <div className='cartpage'>
      <div className='cartpage__container'>
        {
          cart.map(prod => (
            <ItemCart
            key={prod.id}
            prod={prod}
            />
          ))
        }
      </div>
      <div className='cartpage__totals'>
        <ul className='cartpage__list'>
          <li className='cartpage__item'><span>Products </span><span>{product}</span></li>
          <li className='cartpage__item'><span>Total: </span><span>$ {total}</span></li>
        </ul>
        <button onClick={handleBuy} className='cartpage__btn'>Buy all products</button>
      </div>
    </div>
  )
}

export default CartPages;