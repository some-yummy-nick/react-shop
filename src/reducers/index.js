import {combineReducers} from "redux";
import items from './items';
import basket from './basket';

export default combineReducers({
    items,
    basket
});
