import { combineReducers } from 'redux';
import dataCart from './dataCart';
import item from './item';


const rootReducer = combineReducers({
  dataCart,
  item
});

export default rootReducer;