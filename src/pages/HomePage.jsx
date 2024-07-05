import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsThunk } from '../store/slices/products.slice';
import ProdCard from '../components/homePages/ProdCard';
import './styles/homePage.css';
import FilterPrice from '../components/homePages/FilterPrice';
import FilterSelect from '../components/homePages/FilterSelect';

const body = document.querySelector('body');

const HomePage = () => {

  const [inputValue, setinputValue] = useState('');
  const [inputPrice, setInputPrice] = useState({
    min: 0,
    max: Infinity,
  });

  const [categoryValue, setCategoryValue] = useState('')
  
  const [menu, setMenu] = useState(false);

  const products = useSelector((store) => store.products);

  const dispatch = useDispatch();

  // console.log(categoryValue);

  useEffect(() => {
      dispatch(getProductsThunk());
  }, []);

  const textInput = useRef();

  const handleChange = () => {
    setinputValue(textInput.current.value.trim().toLowerCase());
  }
  
  const cbFilter = (prod) => {
    const name = prod.title.toLowerCase().includes(inputValue);
    const price = +prod.price <= +inputPrice.max && +prod.price >= +inputPrice.min;
    const category = categoryValue==='' ? true : prod.categoryId=== +categoryValue;
    return name && price && category;
    
  }

  const handleMenu = () => {
    setMenu(!menu);
  }

  const handleMode = () => {
    body.classList.toggle('dark');
  }

  return (
    <div className='homepage'>
      <div className={`homePage__filters ${menu && 'active'}`}>
        <button onClick={handleMenu}>X</button>
        <FilterPrice 
          setInputPrice={setInputPrice}
        />
        <FilterSelect
          setCategoryValue={setCategoryValue}
        />
        <button onClick={handleMode}>Change mode</button>
      </div>
      <div>
        <input ref={textInput} onChange={handleChange} type="text" />
        <button>🔍</button>
      </div>
      <button className={menu && 'active'} onClick={handleMenu}>Menu</button>
      <div className='homepage__container'>
          {
              products?.filter(cbFilter).map((prod) => (
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

export default HomePage;