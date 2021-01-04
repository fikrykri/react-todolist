import { css } from "@emotion/core";
/**
 * pertama harus instal emotion terlebih dahulu di terminal dengan sintak
 * npm install @emotion/core react-app-rewired customize-cra --save
 * npm install @emotion/babel-preset-css-prop --save-dev
 */

export const button = ({ color, align }) => {
  let textColor;

  switch (color) {
    case "black":
      textColor = "#484848";
      break;
    case "red":
      textColor = "#e06262";
      break;
    default:
      textColor = "#484848";
      break;
  }
  return css`
    font-size: 1.8rem;
    font-family: "Bungee", sans-serif;
    color: ${textColor};
    text-align: ${align};

    width: 24%;
    padding: 16px;
    cursor: pointer;
    background: unset;
    border: unset;
    outline: unset;
  `;
}
