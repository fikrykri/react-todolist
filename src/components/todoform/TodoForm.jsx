import React, { useState } from "react";
import PropTypes from "prop-types";
import { useTheme } from "@emotion/react";

// import styles from "./todoform.module.css";
import * as styles from "./todoForm.styles";

const TodoForm = ({ addTodo, showAdd }) => {
  const theme = useTheme();

  const [value, setValue] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // supaya user tidak memasukan inputan kosong
    if (!value) {
      return alert("No blank todo!");
    }

    // supaya user tidak memberikan todo input melebihi 40 karakter
    if (value.length > 40) {
      alert("Please create a shorter todo text!");
      setValue("");
      return;
    }

    addTodo(value);

    setValue("");
  };

  // jika showAdd true maka kondisi if dibawah dijalankan
  if (showAdd) {
    return (
      <section css={styles.todoForm}>
        <form css={styles.addForm} onSubmit={handleFormSubmit}>
          <input
            type="text"
            css={styles.addInput({theme})}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button css={styles.addBtn({theme})}>Add</button>
        </form>
      </section>
    );
  } else {
    return null;
  }
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
};

export default TodoForm;
