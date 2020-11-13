const initialState = {
  "board-0": {
    id: "board-0",
    lists: ["list-0", "list-1", "list-2"],
    title: "Trello Board",
  },
};

const boardsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default boardsReducer;

//This reducer will be used if we want to have more than one board.
