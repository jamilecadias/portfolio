import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        padding: 0;
        margin: 0;
        font-family: 'Roboto', sans-serif;
        background-color: #2B2C2C;
    }
    *{
        box-sizing: border-box;
    }
`

export default GlobalStyle