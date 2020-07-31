const todos = (state = {}, action) => {
  switch (action.type) {
    case "SET_EDIT_MODE":
      return action.payload;

    default:
      return state;
  }
};

export default todos;
