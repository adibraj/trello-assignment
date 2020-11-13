# Trello Clone

## Suggested Features to be Implemented

- Trello like board (https://trello.com/) with three swimlane (To do, In Progress, and Completed).
- Users can add cards in a each swimlane.
- Users can edit a card.
- Users can delete a card in a trello clone.
- A card can be moved across columns.
- Drag and drop functionality to drag cards from one swimlane to another.

---

## Proposed Technologies Used

- [Reactjs](https://reactjs.org/)- A JavaScript platform and framework for building simple apps to optimizing complex enterprise apps.

## Installation

You need to have node and npm installed on your computer

## Setup

Installing the project's dependencies:
run the command below:

\$ npm install

To start the server, run the command below

\$ npm start

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Dependencies

- material-ui (Used to get inbuilt ui components)
- react-beautiful-dnd (Used for Drag and drop functionality)
- react-redux (Used for state management)
- react-textarea-autosize (Used for auto resizing the textarea as user types)
- redux-thunk (Used for async actions)
- styled-components (Used for styling the component)
- uuidv4 (Used to generate id for newly added cards)

## Project Structure

-- src
-- common  
 -- modules
-- Boards
-- actions
-- components
-- reducers  
 -- Cards
-- actions
-- components
-- reducers
-- TrelloList
-- actions
-- components
-- reducers
-- redux_setup

- common :- common components which can be reused across application.
- Boards :- Future we can have multiple boards, so all boards related stuff goes inside Boards.
- Cards :- All cards related stuff goes inside this package.
- TrelloList :- Furture can have dynamic lists CURD operations can be added to each Swimlanes all logic realted to swimlanes goes inside this package.
- redux_setup :- All redux realted stuff for creating rootReducer, store goes inside this package.
