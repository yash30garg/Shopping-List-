import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from "./types";

export const getItems = () => {
  return {
    type: GET_ITEMS
  };
};

export const addItem = (value) => {

return {
    type : ADD_ITEM ,
    data : value
}

};

export const deleteItem = id => {
  return {
    type: DELETE_ITEM,
    data: id
  };
};



