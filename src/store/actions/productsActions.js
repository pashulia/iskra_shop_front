import axios from '../../axios-shop';
import {
  CREATE_PRODUCT_SUCCESS,
  FETCH_PRODUCTS_SUCCESS,
} from '../actionTypes';

const fetchProductsSuccess = products => {
  return {type: FETCH_PRODUCTS_SUCCESS, products};
};

export const fetchProducts = () => {
  return async dispatch => {
    try {
      const response = await axios.get("/products");
      dispatch(fetchProductsSuccess(response.data));
    } catch(e) {
      console.log(e);
    }
  };
};

const createProductSuccess = () => {
  return {type: CREATE_PRODUCT_SUCCESS};
};

export const createProduct = product => {
  return async dispatch => {
    try {
      await axios.post("/products", product);
      dispatch(createProductSuccess());
    } catch(e) {
      console.log(e);
    }
  };
};
