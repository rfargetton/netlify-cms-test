import { createGlobalStyle } from "styled-components" ;

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 16px;
    @media (max-width: 780px) {
      font-size: 14px;
    }
  }
  body {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: Inter, sans-serif ;
    color: ${props => props.theme.text};
    background-color: ${props => props.theme.background};
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
    color: ${props => props.theme.link};
  }
  ul, ol {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      margin: 0;
    }
  }
  main {
  }
  h1, h2, h3, h4, h5, h6, p, pre {
    margin: 0;
  }
  
`

export default GlobalStyles ;
