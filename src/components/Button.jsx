import React from "react";
import PropTypes from "prop-types";

const Button = ({ text, onClick, color, align }) => {
  const classNames = [
    "header-btn",
    color === "black" && "main-black-color",
    color === "red" && "main-red-color",
    align === "left" && "align-left",
    align === "right" && "align-right"

  ].join(" ");
  /**
 * join diatas memberikan spasi antar index/item pada array agar 
 * komponen pada array bisa dijalankan oleh classname
 */
  return (
    <button className={classNames} onClick={onClick}>
      {text}
    </button>
  );
};

Button.defaultProps ={
  text: 'Button',
  color: 'black',
  align: 'center'
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.oneOf(['black', 'red']),
  align: PropTypes.oneOf(['left', 'right'])
};

export default Button;
