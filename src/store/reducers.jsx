import { combineReducers } from "redux";
import {tokenReducer, nameReducer} from './reducer';


const rootReducer = combineReducers({
    token: tokenReducer,
    name: nameReducer
})

export default rootReducer