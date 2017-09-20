import { FETCH_SUCCESS, CHANGE_AMOUNT, DELETE_PRODUCT } from '../actions';

const initialState = {
  dataCart: null
};

const products = (state = initialState, action) => {
  switch(action.type) {
   case FETCH_SUCCESS:
   const { dataCart } = action;
    return {...state, dataCart};

   case CHANGE_AMOUNT:
    return Object.assign({}, state, {
      dataCart: state.dataCart.map((target, index) => {
        if (index + 1 == action.id) {
          return Object.assign({}, target, {
            amount: action.item
          })
        }

        return target
      })
    });

    case DELETE_PRODUCT:
      return Object.assign({}, state, {
        dataCart: state.dataCart.filter((item, i) =>
          i + 1 != action.id)
      });

   default:
    return state;
  }
}


export default products;