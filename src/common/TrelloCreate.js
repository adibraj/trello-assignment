import React from "react";
import Icon from "@material-ui/core/Icon";
import TrelloButton from "./TrelloButton";
import { connect } from "react-redux";
import { addCard } from "../actions";
import styled from "styled-components";
import TrelloForm from "./TrelloForm";
import TrelloOpenForm from "./TrelloOpenForm";

const OpenFormButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 3px;
  height: 36px;
  margin-left: 8px;
  width: 300px;
  padding-left: 10px;
  padding-right: 10px;
  opacity: 0.5;
`;

class TrelloCreate extends React.PureComponent {
  state = {
    formOpen: false,
    text: "",
  };

  openForm = () => {
    this.setState({
      formOpen: true,
    });
  };

  closeForm = (e) => {
    this.setState({
      formOpen: false,
    });
  };

  handleInputChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleAddCard = () => {
    const { dispatch, listID } = this.props;
    const { text } = this.state;
    console.log(listID);
    if (text) {
      this.setState({
        text: "",
      });
      dispatch(addCard(listID, text));
    }
  };

  renderOpenForm = () => {
    const { list } = this.props;

    const buttonText = "Add another card";

    return (
      <OpenFormButton onClick={this.openForm}>
        <Icon>add</Icon>
        <p style={{ flexShrink: 0 }}>{buttonText}</p>
      </OpenFormButton>
    );
  };

  render() {
    const { text } = this.state;
    const { list } = this.props;
    return this.state.formOpen ? (
      <TrelloForm
        text={text}
        onChange={this.handleInputChange}
        closeForm={this.closeForm}
      >
        <TrelloButton onClick={list ? this.handleAddList : this.handleAddCard}>
          {"Add Card"}
        </TrelloButton>
      </TrelloForm>
    ) : (
      <TrelloOpenForm list={list} onClick={this.openForm}>
        {"Add another card"}
      </TrelloOpenForm>
    );
  }
}

export default connect()(TrelloCreate);
