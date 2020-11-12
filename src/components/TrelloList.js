import React from "react";
import TrelloCard from "./TrelloCard";
import styled from "styled-components";
import Icon from "@material-ui/core/Icon";
import { connect } from "react-redux";

const ListContainer = styled.div`
  background-color: #dfe3e6;
  border-radius: 3px;
  width: 300px;
  padding: 8px;
  height: 100%;
  margin: 0 8px 0 0;
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const DeleteButton = styled(Icon)`
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;
  opacity: 0.4;
  &:hover {
    opacity: 0.8;
  }
`;

const ListTitle = styled.h4`
  transition: background 0.3s ease-in;
  ${TitleContainer}:hover & {
    background: #ccc;
  }
`;

const TrelloList = ({ title, cards, listID }) => {
  return (
    <ListContainer>
      <TitleContainer>
        <ListTitle>{title}</ListTitle>
      </TitleContainer>
      {cards.map((card, index) => (
        <TrelloCard
          key={card.id}
          text={card.text}
          id={card.id}
          listID={listID}
        />
      ))}
    </ListContainer>
  );
};

export default TrelloList;
