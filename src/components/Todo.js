import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setEditMode } from "../actions";

const Todo = props => {
  let color = "";
  switch (parseInt(props.priority)) {
    case 1:
      color = "skyblue";
      break;
    case 2:
      color = "tomato";
      break;
    case 3:
      color = "red";
      break;
    default:
      color = "skyblue";
      break;
  }
  return (
    <li
      onClick={() => {
        props.setEditMode({
          id: props.id,
          priority: props.priority,
          body: props.body
        });
      }}
      style={{
        backgroundColor: color,
        color: "white"
      }}
    >
      {props.body}
    </li>
  );
};

Todo.PropTypes = {
  onClick: PropTypes.func.isRequired,
  finished: PropTypes.func.isRequired,
  text: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  editTodo: state.editTodo
});

const mapDispatchToProps = dispatch => ({
  setEditMode: toDo => dispatch(setEditMode(toDo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
