import React from "react";
import { connect } from "react-redux";
import { addToDo, editTodoAction, setEditMode } from "../actions";
import { Formik, Field, Form } from "formik";

const AddToDo = props => {
  return (
    <div>
      <Formik
        enableReinitialize={true}
        initialValues={{
          priority: props.editTodo ? props.editTodo.priority : "",
          body: props.editTodo ? props.editTodo.body : "",
          id: props.editTodo ? props.editTodo.id : ""
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          if (Object.keys(props.editTodo).length > 0) {
            let toDo = {
              body: values.body,
              priority: values.priority,
              id: values.id
            };
            console.log(" edit toDo Values", toDo);
            props.editTodoAction(toDo);
          } else {
            let toDo = {
              body: values.body,
              priority: values.priority,
              id: Math.random()
            };
            console.log(" toDo Values", toDo);
            props.addToDo(toDo);
          }
          resetForm({ body: "", priority: "" });
          props.setEditMode({});
        }}
        render={({
          values,
          setFieldValue,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
          /* and other goodies */
        }) => (
          <Form onSubmit={handleSubmit}>
            <Field type="text" name="body" />
            {/*errors.email && touched.email && errors.email*/}
            <Field
              name="priority"
              render={({ fields }) => (
                <select
                  {...fields}
                  onChange={e => setFieldValue("priority", e.target.value)}
                  value={values.priority}
                  type="text"
                  name="priority"
                >
                  <option value="">Choose Priority</option>
                  <option value="1">Low Priority</option>
                  <option value="3">High Priority</option>
                  <option value="2">Medium Priority</option>
                </select>
              )}
            />
            <button type="submit">{Object.keys(props.editTodo).length > 0 ? "Edit":"Add"} To Do</button>
          </Form>
        )}
      />

      {/*
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addToDo(input.value));
          input.value = "";
        }}
      >
        <input ref={node => (input = node)} />
        <button
          type="submit"
          style={{
            backgroundColor: "blue",
            color: "white",
            marginLeft: "15px"
          }}
        >
          Add ToDo Task
        </button>
      </form>
        */}
    </div>
  );
};

const mapStateToProps = state => ({
  editTodo: state.editTodo
});

const mapDispatchToProps = dispatch => ({
  editTodoAction: toDo => dispatch(editTodoAction(toDo)),
  setEditMode: toDo => dispatch(setEditMode(toDo)),
  addToDo: toDo => dispatch(addToDo(toDo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddToDo);
