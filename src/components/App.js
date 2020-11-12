import React, { Component } from "react";
import TrelloList from "./TrelloList";
import { connect } from "react-redux";
import styled from "styled-components";

const ListsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

class App extends Component {
  render() {
    const { lists } = this.props;
    console.log(lists);
    return (
      <ListsContainer>
        {lists &&
          lists.map((list) => (
            <TrelloList
              title={list.title}
              cards={list.cards}
              key={list.id}
              listID={list.id}
            />
          ))}
      </ListsContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  lists: state.lists,
});

export default connect(mapStateToProps)(App);
