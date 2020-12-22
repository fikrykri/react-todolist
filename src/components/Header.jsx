import React from "react";
import PropTypes from "prop-types";

import Button from "./button/Button";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  return (
    <section className="header">
      <Button
        text={showAdd ? "Finish" : "Add"}
        onClick={showAddToggle}
        color="black"
        align="left"
      />
      <h1 className="header-title">Todo Lists</h1>
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
