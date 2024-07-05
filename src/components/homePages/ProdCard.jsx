import React from 'react';
import './styles/prodCard.css';
import { useNavigate } from 'react-router-dom';
import { postProductsthunk } from '../../store/slices/cart.slice';
import { useDispatch } from 'react-redux';

const ProdCard = ({prod}) => {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleDetail = () => {
      navigate(`/product/${prod.id}`);
  }

  const handleAddCart = () => {
    dispatch(postProductsthunk({
      "quantity": 1,
      "productId": prod.id,
    }));
  }

  return (
        <article className='prodCard'>
          <figure onClick={handleDetail} className='prodCard__img'>
            <img src={prod.images[0].url} alt="product image" />
            <img src={prod.images[1].url} alt="product image" />

          </figure>
          <hr className='prodCard__div'/>
          <ul className='prodCard__list'>
              <li className='prodCard__item'><span>{prod.brand}</span><span>{prod.title}</span></li>
              <li className='prodCard__item'><span>Price</span><span>$ {prod.price}</span></li>
          </ul>
          <div className='prodCard__buttons'>
              <button onClick={handleDetail}>Detail</button>
              <button onClick={handleAddCart}>Add to cart</button>
          </div>
        </article>
  )
}

export default ProdCard;