import { createStore, combineReducers } from 'redux';
import tokenReducer from './reducers'; 
// import  { nameReducer}  from './reducer'
const rootReducer = combineReducers({
  token: tokenReducer,
//   name: nameReducer
});

const store = createStore(rootReducer);

export default store;
