import React from 'react';
import { useForm } from 'react-hook-form';
import './styles/filterPrice.css'

const FilterPrice = ({setInputPrice}) => {

    const { handleSubmit, register } = useForm();

    const submit = (data) => {
        setInputPrice({
            min: data.min, 
            max: data.max || Infinity,
        });
    }

  return (
    <form className='filterprice' onSubmit={handleSubmit(submit)}>
        <h3>Price</h3>
        <div>
            <label htmlFor="min">Min</label>
            <input {...register('min')} id='min' type="text" />
        </div>
        <div>
            <label htmlFor="max">Max</label>
            <input {...register('max')} id='max' type="text" />
        </div>
        <button>submit</button>
    </form>
  )
}

export default FilterPrice;