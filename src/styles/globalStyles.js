import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root {
        --font-primary: 'Poppins', sans-serif;
        --accent-color-primary: #e50914;
        --accent-color-secondary: #b81d24; //b20710
        --fg-bold: #d3cecc;
        --fg-light: #d1d5db;
        --fg-lighter: #ffffffb3;
        --fg-lightest: #808080;
        --bg-dark: #141414;
    }
    html {
        box-sizing: border-box;
        font-size: 100%;
    }
    *,*::before,*::after {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
    }
    body {
        width: 100%;
        height: 100vh;
        
        line-height: 1.5;
        background-color: var(--bg-dark);
        font-family: var(--font-primary);
        color: var(--fg-light);
    }
    a, button, input {
        font-family: inherit;
    }
    a {
        text-decoration: none;
        color: inherit;
        cursor: pointer;
    }
    img,svg {
        display: block;
    }
    ul {
        list-style: none;
    }
    li {
        cursor: pointer;
    }
    button {
        border: 0;
        padding: 0.5rem;
        background-color: transparent;
        cursor: pointer;
    }
    .container {
        width: 80%;
        margin: 0 auto;
        max-width: 1100px;
        min-height: 100vh;
        padding: 1rem;
        position: relative;
        font-family: var(--font-primary);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 3rem;

    }
`;
