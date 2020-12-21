import React, { useState } from "react";

import Paper from "../components/Paper";
import Header from "../components/Header";
import TodoForm from "../components/TodoForm";
import Todos from "../components/Todos";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: "Learning React!" },
    { text: "Learning React!" },
    { text: "Learning React!" },
  ]);

  const addTodo = (value) => {
    const addedTodo = [...todos, { text: value }]; //membuat sebuah array baru apapun yang ada didalam todos state
    
    setTodos(addedTodo);
  };

  return ( 
    <Paper>
      <Header />
      <TodoForm addTodo={addTodo}/>
      <Todos todos={todos} />
    </Paper>
  );
};

export default TodoList;
