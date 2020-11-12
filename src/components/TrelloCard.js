import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import styled from "styled-components";
import Icon from "@material-ui/core/Icon";
//import { editCard, deleteCard } from "../actions";
import { connect } from "react-redux";
import TrelloButton from "../common/TrelloButton";

const CardContainer = styled.div`
  margin: 0 0 8px 0;
  position: relative;
  max-width: 100%;
  word-wrap: break-word;
`;

const EditButton = styled(Icon)`
  position: absolute;
  display: none;
  right: 5px;
  top: 5px;
  opacity: 0.5;
  ${CardContainer}:hover & {
    display: block;
    cursor: pointer;
  }
  &:hover {
    opacity: 0.8;
  }
`;

const DeleteButton = styled(Icon)`
  position: absolute;
  display: none;
  right: 5px;
  bottom: 5px;
  opacity: 0.5;
  ${CardContainer}:hover & {
    display: block;
    cursor: pointer;
  }
  &:hover {
    opacity: 0.8;
  }
`;

const TrelloCard = React.memo(({ text, id, listID, index, dispatch }) => {
  return (
    <CardContainer>
      <Card>
        <EditButton fontSize="small">edit</EditButton>
        <DeleteButton fontSize="small">delete</DeleteButton>

        <CardContent>
          <Typography>{text}</Typography>
        </CardContent>
      </Card>
    </CardContainer>
  );
});
export default connect()(TrelloCard);
