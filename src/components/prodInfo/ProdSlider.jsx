import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import './styles/prodSlider.css';

const ProdSlider = ({product}) => {
  
  console.log(product);
  
  return (
    <Splide
      options={ {
        rewind: true,
        gap   : '1rem',
      } }
      aria-label="My Favorite Images"
    >
      {
        product?.images.map(image => (
          <SplideSlide key={image.id}>
            <img src={image.url} alt={`Image ${image.id}`}/>
          </SplideSlide>
        ))
      }
      
    </Splide>
  )
}

export default ProdSlider;