import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Todo from "./Todo";

const TodoList = props => (
  <ol>{props.todos?.map(todo => <Todo key={todo.id} {...todo} />)}</ol>
);

TodoList.PropTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      priority: PropTypes.bool.isRequired,
      body: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
