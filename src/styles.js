import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body, html{
        padding: 0;
        margin: 0;
        font-family: 'Roboto', sans-serif;
        background-color: #121212;
        max-width: 100%;
        overflow-x: hidden;
    }
    *{
        box-sizing: border-box;
    }
`

export default GlobalStyle