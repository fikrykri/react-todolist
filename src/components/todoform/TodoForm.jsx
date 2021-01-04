import React, { useState } from "react";
import PropTypes from "prop-types";
import { useTheme } from "@emotion/react";

import Container from "../../layout/Container";
import Item from "../../layout/Item";
import Button from "../button/Button";

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
      <section className="todoform-component">
        <form onSubmit={handleFormSubmit}>
          <Container alignItems="center">
            <Item flex={1} padding="0 0 0 16px">
              <input
                type="text"
                css={styles.addInput({ theme })}
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </Item>
            <Item>
              {/* <button css={styles.addBtn({ theme })}>Add</button> */}
              <Button text="Add"/>
            </Item>
          </Container>
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
