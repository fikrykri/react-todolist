import React from "react";
import PropTypes from "prop-types";

const Todos = ({ children }) => {
  return <section className="todos">{children}</section>;
};

Todos.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Todos;