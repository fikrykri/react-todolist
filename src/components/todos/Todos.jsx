import React from "react";
import PropTypes from "prop-types";

import Todo from "../todo/Todo";
import styles from "./todos.module.css";

const Todos = ({ todos, completeTodo }) => {
  return (
    <section className={styles.todos}>
      {todos.length > 0 &&
        // jika kondisi todos.length memiliki item maka akan me return code dibawah
        todos.map((todo, index) => {
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
      {todos.length === 0 && (
        // dan jika kondisi todos.length tidak memiliki item akan me return code dibawah
        <div className={styles.todoPlaceholderText}>
          Add todo by clicking <span className={styles.addButtonPlaceholderText}>Add</span> button on the top left corner
        </div>
      )}
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
