import React from 'react';

import { useDispatch } from 'react-redux';

import { Typography } from '@material-ui/core';

import ProductForm from '../../components/ProductForm/ProductForm';
import { createProduct } from '../../store/actions/productsActions';

const NewProduct = props => {

  const dispatch = useDispatch();
  const formSubmitHandler = async product => {
    await dispatch(createProduct(product));
    props.history.push("/");
  };

  return (
    <>
      <Typography variant="h4">
        New Product
      </Typography>
      <ProductForm onSubmit={formSubmitHandler} />
    </>
  );
};

export default NewProduct;
