import { combineReducers } from 'redux';
import products from './main';


const rootReducer = combineReducers({
  products,
});

export default rootReducer;