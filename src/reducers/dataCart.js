import { FETCH_SUCCESS } from '../actions/fetch';

const initialState = {
  dataCart: null
};

const dataCart = (state = initialState, actions) => {
  switch(actions.type) {
   case FETCH_SUCCESS:
    return actions.dataCart
   default:
    return state;
  }
}

export default dataCart;