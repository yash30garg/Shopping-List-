import uuid from "uuid";
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from "../actions/types";

const initialState = {
  items: [
    {
      id: uuid.v4(),
      value: "eggs"
    },
    {
      id: uuid.v4(),
      value: "milk"
    },
    {
      id: uuid.v4(),
      value: "water"
    },
    {
      id: uuid.v4(),
      value: "fruits"
    }
  ]
};

export default function(state = initialState, action) {
  const { type, data } = action;

  switch (type) {
    case GET_ITEMS:
      return {
        ...state
      };

    case DELETE_ITEM: {
      return {
        ...state,
        items: state.items.filter(item => item.id !== data)
      };
    }

    case ADD_ITEM: {
      return {
        ...state,
        items: [...state.items, { id: uuid.v4(), value: data }]
      };
    }

    default:
      return state;
  }
}
