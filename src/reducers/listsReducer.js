import { CONSTANTS } from "../actions";

const initialState = [
  {
    id: "1",
    title: "To Do",
    cards: [
      { id: "1", text: "My First Card of board" },
      { id: "2", text: "My Second Card of board" },
    ],
  },
  {
    id: "2",
    title: "In Progress",
    cards: [{ id: "1", text: "Card is in progress " }],
  },
  {
    id: "3",
    title: "Completed",
    cards: [{ id: "1", text: "Assignment done" }],
  },
];

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_CARD: {
      const { listID, id, text } = action.payload;
      const list = state.find((e) => e.id === listID);
      const newCard = {
        id: id,
        text: text,
      };
      const newList = list.push(newCard);
      return { ...state, newList };
    }

    default:
      return state;
  }
};

export default listsReducer;
