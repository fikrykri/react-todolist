import React, { useState } from "react";

import Paper from "../components/Paper";
import Header from "../components/Header";
import TodoForm from "../components/TodoForm";
import Todos from "../components/Todos";

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
      alert("Only 10 todos is allowed!");
    }
  };

  // membuat button on dan of
  const showAddToggle = () => setShowAdd(!showAdd);

  const completeTodo = (index) => {
    const addedTodo = [...todos];
    addedTodo[index].isCompleted = !addedTodo[index].isCompleted;

    setTodos(addedTodo);
  };

  return (
    <Paper>
      <Header showAddToggle={showAddToggle} showAdd={showAdd} />
      <TodoForm addTodo={addTodo} showAdd={showAdd} />
      <Todos todos={todos} completeTodo={completeTodo} />
    </Paper>
  );
};

export default TodoList;
