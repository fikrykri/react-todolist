import { css } from "@emotion/core";
/**
 * pertama harus instal emotion terlebih dahulu di terminal dengan sintak
 * npm install @emotion/core react-app-rewired customize-cra --save
 * npm install @emotion/babel-preset-css-prop --save-dev
 */

export const button = ({ color, align, theme }) => {
  let textColor;

  // pengambilan color primary dalam object theme di app js dengan short hand
  const {
    color: { primary }
  } = theme;
  // code diatas sama halnya dengan "theme.color.primary" tetapi code di atas
  // mengambil primary key nya untuk diguna kan berulang kali


  switch (color) {
    case "black":
      textColor = primary.black;
      break;
    case "red":
      textColor = primary.red;
      break;
    default:
      textColor = primary.black;
      break;
  }
  return css`
    font-size: 1.8rem;
    font-family: "Bungee", sans-serif;
    color: ${textColor};
    text-align: ${align};

    // width: 24%;
    padding: 16px;
    cursor: pointer;
    background: unset;
    border: unset;
    outline: unset;
  `;
}
