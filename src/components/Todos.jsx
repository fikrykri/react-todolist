import React from "react";
import PropTypes from "prop-types";

import Todo from "./Todo";

const Todos = ({ todos }) => {
  return (
    <section className="todos">
      {todos.map((todo) => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};

Todos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
    })
  ),
  /**
   * code diatas, todos merupakan sebuah array of object yang berisi
   * keys dan value, dimana keysnya adalah text yang berisikan value
   */
};

export default Todos;
