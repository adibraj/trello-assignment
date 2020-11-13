import { CONSTANTS } from "../../../redux_setup/actions";

const initialState = {
  "card-0": {
    text: "To Add feature to have multiple boards.",
    id: "card-0",
    list: "list-0",
  },
  "card-1": {
    text: "Replace static data by calling backend api .",
    id: "card-1",
    list: "list-0",
  },
  "card-2": {
    text: "Performance Optimization",
    id: `card-2`,
    list: "list-0",
  },
  "card-3": {
    text: "To implement drag and drop funcationality",
    id: "card-3",
    list: "list-0",
  },
};

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_CARD: {
      const { text, listID, id } = action.payload;

      const newCard = {
        text,
        id: `card-${id}`,
        list: listID,
      };

      return { ...state, [`card-${id}`]: newCard };
    }
    case CONSTANTS.EDIT_CARD: {
      const { id, newText } = action.payload;
      const card = state[id];
      card.text = newText;
      return { ...state, [`card-${id}`]: card };
    }

    case CONSTANTS.DELETE_CARD: {
      const { id } = action.payload;
      const newState = state;
      delete newState[id];
      return newState;
    }
    default:
      return state;
  }
};

export default cardsReducer;
