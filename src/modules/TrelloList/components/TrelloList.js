import React from "react";
import TrelloCard from "../../Cards/components/TrelloCard";
import TrelloCreate from "../../../common/TrelloCreate";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
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
`;

const Title = styled.h4`
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-size: 20px;
  line-height: 24px;
  font-weight: 600;
  margin: 0 0 8px;
`;

const TrelloList = React.memo(({ title, cards, listID }) => {
  return (
    <ListContainer>
      <Droppable droppableId={String(listID)} type="card">
        {(provided) => (
          <div>
            <div>
              <TitleContainer>
                <Title>{title}</Title>
              </TitleContainer>
            </div>
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {cards.map((card, index) => (
                <TrelloCard
                  key={card.id}
                  text={card.text}
                  id={card.id}
                  index={index}
                  listID={listID}
                />
              ))}
              {provided.placeholder}
              <TrelloCreate listID={listID} />
            </div>
          </div>
        )}
      </Droppable>
    </ListContainer>
  );
});

export default connect()(TrelloList);
