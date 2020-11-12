import { CONSTANTS } from "../actions";

const initialState = [
  {
    id: "list-1",
    title: "To Do",
    cards: [
      { id: "1", text: "My First Card of board" },
      { id: "2", text: "My Second Card of board" },
    ],
  },
  {
    id: "list-2",
    title: "In Progress",
    cards: [{ id: "1", text: "Card is in progress " }],
  },
  {
    id: "list-3",
    title: "Completed",
    cards: [{ id: "1", text: "Assignment done" }],
  },
];

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_CARD: {
      const { listID, id } = action.payload;
      const list = state[listID];
      list.cards.push(`card-${id}`);
      return { ...state, [listID]: list };
    }

    default:
      return state;
  }
};

export default listsReducer;
