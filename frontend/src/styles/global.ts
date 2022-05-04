import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: #fff;
        color: #141414;
    }

    body, input, button {
        font-family: 'Roboto', serif;
        font-size: 16px;
    }

    button {
        cursor: pointer;
    }

`;
