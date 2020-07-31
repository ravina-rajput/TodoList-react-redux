let nextTodoId = 0;

export const addToDo = toDo => ({
  type: "ADD_TODO",
  payload: toDo
});

export const setVisibilityFilter = filter => ({
  type: "SET_VISIBILITY_FILTER",
  filter
});

export const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  id
});

export const setEditMode = toDo => ({
  type: "SET_EDIT_MODE",
  payload: toDo
});

export const editTodoAction = toDo => ({
  type: "EDIT_TODO_ACTION",
  payload: toDo
});

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_FINISHED: "SHOW_FINISHED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};
