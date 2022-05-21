import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --background: #1647A6;
        --text-font: #eddea4;
        --title-font: #fff;
        --button: #48C4EA;
        --text-secondary: #0F241D;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    // font-size: 16px (Desktop)
    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; // 15px
        }
        @media (max-width: 720) {
            font-size: 87.5%; // 14px
        }
    }
    body {
        background: #fff;
        -webkit-font-smoothing: antialiased;
    }
    input, textarea, button, p {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    h1, h2, h3, h4, h5, h6, strong {
        font-family: "Roboto", -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: var(--title-font);
        font-weight: 600;
    }
    button, a {
        cursor: pointer;
    }
    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
