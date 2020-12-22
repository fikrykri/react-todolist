import React, { useState } from "react";

import Paper from "../components/paper/Paper";
import Header from "../components/header/Header";
import TodoForm from "../components/todoform/TodoForm";
import Todos from "../components/todos/Todos";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: "Learning React!", isCompleted: false },
    { text: "Learning React!", isCompleted: false },
    { text: "Learning React!", isCompleted: false },
  ]);

  const [showAdd, setShowAdd] = useState(false);

  const addTodo = (value) => {
    // limitasi penambahan todos agar tidak melebihi paper
    if (todos.length < 9) {
      const addedTodo = [...todos, { text: value, isCompleted: false }]; //membuat sebuah array baru apapun yang ada didalam todos state

      setTodos(addedTodo);
    } else {
      alert("Only 9 todos is allowed!");
    }
  };

  // membuat button on dan of
  const showAddToggle = () => setShowAdd(!showAdd);

  const completeTodo = (index) => {
    const addedTodo = [...todos];
    addedTodo[index].isCompleted = !addedTodo[index].isCompleted;

    setTodos(addedTodo);
  };

  const clearTodos = () => !showAdd && setTodos([]); 
  // code diatas jika showAdd tidak false / true maka dia akan return setTodos

  return (
    <Paper>
      <Header
        showAddToggle={showAddToggle}
        showAdd={showAdd}
        clearTodos={clearTodos}
      />
      <TodoForm addTodo={addTodo} showAdd={showAdd} />
      <Todos todos={todos} completeTodo={completeTodo} />
    </Paper>
  );
};

export default TodoList;
