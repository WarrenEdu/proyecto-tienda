import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPurchasesThunk } from '../store/slices/purchases.slice';

const Purchases = () => {

  const purchasesSlice = useSelector(store => store.purchasesSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPurchasesThunk());
  }, []);

  console.log(purchasesSlice)

  return (
    <div>Purchases</div>
  )
}

export default Purchases;