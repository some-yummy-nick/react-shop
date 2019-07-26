import {ADD_ITEM, REMOVE_ITEM} from "../constants/action-types";

export const addItem = itemId => ({
    type: ADD_ITEM,
    item: itemId
});

export const removeItem = itemId => ({
    type: REMOVE_ITEM,
    item: itemId
});
