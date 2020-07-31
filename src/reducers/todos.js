const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "TOGGLE_TODO":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, finished: !todo.finished } : todo
      );
      case "EDIT_TODO_ACTION":
        let id = action.payload.id;
        let tempTodo = state.find(todo => todo.id == id)
        let index = state.indexOf(tempTodo);
        let tempState = [...state];
        tempState[index] = action.payload;
        return tempState;
    default:
      return state;
  }
};

export default todos;
