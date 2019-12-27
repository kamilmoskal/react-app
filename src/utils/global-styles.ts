import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        transition: all 0.2s linear;
        transition-property: color, background-color, border-color;
    }

    body {
        background: yellow;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

`;

export default GlobalStyle;