import React from "react";
import PropTypes from "prop-types";

import Todo from "../todo/Todo";
import Container from "../../layout/Container";
import Item from "../../layout/Item";

// import styles from "./todos.module.css";
import * as styles from "./todos.styles";

const Todos = ({ todos, completeTodo }) => {
  return (
    <section className="todos-component">
      <Container flexDirection="column" minHeight="500px">
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
          <div css={styles.todoPlaceholderText}>
            Add todo by clicking{" "}
            <span css={styles.addButtonPlaceholderText}>Add</span> button on the
            top left corner
          </div>
        )}
      </Container>
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
