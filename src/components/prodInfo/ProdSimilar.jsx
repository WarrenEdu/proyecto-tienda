import React, { useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import ProdCard from '../homePages/ProdCard';
import './styles/prodSimilar.css';

const ProdSimilar = ({product}) => {

  const [items, getItems] = useFetch();

  useEffect(() => {
    const path = `/products?categoryId=${product.categoryId}`;  
    getItems(path);
  }, []);

  const cvFilter = (prod) => {
    return prod.id !== product.id;
  }

  return (
    <div className='prodsimilar'>
      <h2 className='prodsimilar__title'>Discover simiklar items</h2>
      <div className='homepage__container'>
        {
          items?.filter(cvFilter).map(prod => (
            <ProdCard
                  key = {prod.id}
                  prod = {prod}
            />
          ))
        }
      </div>
    </div>
  )
}

export default ProdSimilar;