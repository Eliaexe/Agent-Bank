import { combineReducers } from "redux";
import { tokenReducer, nameReducer } from "./reducer";

const ucer = combineReducers({
    token: tokenReducer,
    name: nameReducer,
})

export default ucer