import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
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