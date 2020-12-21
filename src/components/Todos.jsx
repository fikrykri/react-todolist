import React from "react";
import PropTypes from "prop-types";

import Todo from "./Todo";

const Todos = ({ todos, completeTodo }) => {
  return (
    <section className="todos">
      {todos.map((todo, index) => {
        return (
          <Todo
            key={index}
            isCompleted={todo.isCompleted}
            text={todo.text}
            completeTodo={completeTodo}
            index={index}
          />
        );
      })}
    </section>
  );
};

Todos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      completeTodo: PropTypes.func.isRequired,
    })
  ),
  /**
   * code diatas, todos merupakan sebuah array of object yang berisi
   * keys dan value, dimana keysnya adalah text yang berisikan value
   */
};

export default Todos;
