import { combineReducers } from "redux";
import listsReducer from "../../modules/TrelloList/reducers/listsReducer";
import cardsReducer from "../../modules/Cards/reducers/cardsReducer";
import boardsReducer from "../../modules/Boards/reducers/boardsReducer";

export default combineReducers({
  lists: listsReducer,
  cards: cardsReducer,
  boards: boardsReducer,
});
