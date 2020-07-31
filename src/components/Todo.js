import React from "react";
import PropTypes from "prop-types";

const Todo = ({ onClick, finished, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: finished ? "line-through" : "none"
    }}
  >
    {text}
  </li>
);

Todo.PropTypes = {
  onClick: PropTypes.func.isRequired,
  finished: PropTypes.func.isRequired,
  text: PropTypes.func.isRequired
};

export default Todo;
