import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Lato', sans-serif;
    background-color: #f3f8fa;
    color: #274060;
  }
`;