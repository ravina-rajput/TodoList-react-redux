import * as actions from "./actions";

describe("todo actions", () => {
  it("addToDo should create the ADD_TODO action", () => {
    expect(actions.addTodo("Use Redux")).toEqual({
      type: "ADD_TODO",
      id: 0,
      text: "Use Redux"
    });
  });

  it("setVisibilityFilter should create the SET_VISIBILITY_FILTER action", () => {
    expect(actions.setVisibilityFilter("active")).toEqual({
      type: "SET_VISIBILITY_FILTER",
      filter: "active"
    });
  });

  it("toggleTodo should create the TOGGLE_TODO action", () => {
    expect(actions.toggleTodo(1)).toEqual({
      type: "TOGGLE_TODO",
      id: 1
    });
  });
});
