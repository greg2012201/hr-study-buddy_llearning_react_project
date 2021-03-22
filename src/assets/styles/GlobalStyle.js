import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
html {
    box-sizing:border-box;
}
*,*::after, *::before {
    box-sizing:border-box;
  margin:0;
   
}
body {
    font-family: 'Montserrat', sans-serif;
}
a, button { 
    font-family: 'Montserrat', sans-serif;
}
`
