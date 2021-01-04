import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@emotion/react";

import Button from "../button/Button";

// import styles css module
// import styles from "./header.module.css";

// import styles css in js
import * as styles from './header.styles';

const Header = ({ showAddToggle, showAdd, clearTodos }) => {

  const theme = useTheme();

  return (
    <section css={styles.header}>
      <Button
        text={showAdd ? "Finish" : "Add"} 
        onClick={showAddToggle}
        color="black"
        align="left"
      />
      <h1 css={styles.headerTitle(theme)}>Todo Lists</h1>
      <Button text="Clear" onClick={clearTodos} color="red" align="right" />

      {/* code dibawah merupakan penggunaan button tanpa components react */}
      {/* <button className="header-btn main-black-color" onClick={showAddToggle}>
        {showAdd ? 'Finish' : 'Add'}
      </button> */}
      {/* <button className="header-btn main-red-color" onClick={clearTodos}>
        Clear
      </button> */}
    </section>
  );
};

Header.propTypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired,
};

export default Header;
