import { CONSTANTS } from "../../../redux_setup/actions";

const initialState = {
  "list-0": {
    id: "list-0",
    cards: ["card-0", "card-1"],
    title: "To Do",
    board: "board-0", //If we want to have more than one board
  },
  "list-1": {
    id: "list-1",
    cards: ["card-2"],
    title: "In Progress",
    board: "board-0",
  },
  "list-2": {
    id: "list-2",
    cards: ["card-3"],
    title: "Completed",
    board: "board-0",
  },
};

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST: {
      const { title, id } = action.payload;
      const newList = {
        title: title,
        id: `list-${id}`,
        cards: [],
      };

      const newState = { ...state, [`list-${id}`]: newList };

      return newState;
    }

    case CONSTANTS.ADD_CARD: {
      const { listID, id } = action.payload;
      const list = state[listID];
      list.cards.push(`card-${id}`);
      return { ...state, [listID]: list };
    }

    case CONSTANTS.DRAG_HAPPENED:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexEnd,
        droppableIndexStart,
      } = action.payload;

      // in the same list
      if (droppableIdStart === droppableIdEnd) {
        const list = state[droppableIdStart];
        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card);
        return { ...state, [droppableIdStart]: list };
      }

      // other list
      if (droppableIdStart !== droppableIdEnd) {
        // find the list where the drag happened
        const listStart = state[droppableIdStart];
        // pull out the card from this list
        const card = listStart.cards.splice(droppableIndexStart, 1);
        // find the list where the drag ended
        const listEnd = state[droppableIdEnd];

        // put the card in the new list
        listEnd.cards.splice(droppableIndexEnd, 0, ...card);
        return {
          ...state,
          [droppableIdStart]: listStart,
          [droppableIdEnd]: listEnd,
        };
      }
      return state;

    case CONSTANTS.DELETE_CARD: {
      const { listID, id } = action.payload;

      const list = state[listID];
      const newCards = list.cards.filter((cardID) => cardID !== id);

      return { ...state, [listID]: { ...list, cards: newCards } };
    }

    default:
      return state;
  }
};

export default listsReducer;
