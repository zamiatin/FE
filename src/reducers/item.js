import { CHANGE_AMOUNT } from '../actions/item';

const initialState = {
  products: null,
};

const item = (state = initialState, actions) => {
  switch(actions.type) {
   case CHANGE_AMOUNT:
    return state
   default:
    return state;
  }
}

export default item;