import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --white: #fdfdfd;
    --gray: #f3f2f2;
    --gray-line: #dbdbdb;
    --black: #2f2f2f;
    --yellow: #F3F2DA;
    --green: #4E8D7C;
    --dark-green: #045762;
    --blue: #493CF0;
    --dark-blue: #3225D9;
    --red: #F03949;
    --dark-red: #D92232;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: 'Roboto', sans-serif;
  }
  
  body {
    background: var(--yellow);
  }
`

export default GlobalStyle
