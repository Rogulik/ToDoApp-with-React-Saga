import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`

html{
    height: 100%;
    background: darkcyan;
    font-family:'Courier New', Courier, monospace;
}

*{
    padding:0;
    margin:0;
    box-sizing:border-box;
}

h1{
    color:white;
    font-size: 3rem;
}

`

export default GlobalStyles
