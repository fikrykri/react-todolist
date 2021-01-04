import React, { useState } from "react";
import PropTypes from "prop-types";

import styles from "./todoform.module.css";

const TodoForm = ({ addTodo, showAdd }) => {

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
      <section className={styles.add}>
        <form className={styles.addForm} onSubmit={handleFormSubmit}>
          <input
            type="text"
            className={styles.addInput}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className={styles.addBtn}>Add</button>
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
