import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
/**
 * note untuk classnames harus diinstal lewat terminal klo offline
 * menggunakan vscode "npm install classnames --save"
 * dependenci classnames ini berfungi untuk menampung classnames/library classnames
 */

 //import css button module
// import styles from "./button.module.css";

// import css in js
import * as styles from './button.styles';

const Button = ({ text, onClick, color, align }) => {
  // code dibawah tanpa menggunakan css module dan cssnya terdapat diglobal css
  // const classNames = [
  //   "header-btn",
  //   color === "black" && "main-black-color",
  //   color === "red" && "main-red-color",
  //   align === "left" && "align-left",
  //   align === "right" && "align-right"
  // ].join(" ");
  
  // Penggunaan css module dari react
  // const classNames = cx(styles.headerBtn, {
  //   [styles.mainBlackColor]: color === "black",
  //   [styles.mainRedColor]: color === "red",
  //   [styles.alignLeft]: align === "left",
  //   [styles.alignRight]: align === "right"
  // });

  /**
 * join diatas memberikan spasi antar index/item pada array agar 
 * komponen pada array bisa dijalankan oleh classname
 */
  return (
    // penggunaan css module
    // <button className={classNames} onClick={onClick}>
    //   {text}
    // </button>

    // penggunaan css in js
    <button css={styles.button({ align, color })} onClick={onClick}>
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
