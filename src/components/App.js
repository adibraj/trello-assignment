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
    return (
      <ListsContainer>
        {lists &&
          lists.map((list) => (
            <TrelloList title={list.title} cards={list.cards} />
          ))}
      </ListsContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  lists: state.lists,
});

export default connect(mapStateToProps)(App);
