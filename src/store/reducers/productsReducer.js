import { FETCH_PRODUCTS_SUCCESS } from '../actionTypes';

const initialState = {
  products: []
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return {...state, products: action.products};
    default:
      return state;
  }
};

export default reducer;

