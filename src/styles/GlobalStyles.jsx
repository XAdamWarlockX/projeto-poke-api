import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    font-family: "Open Sans", sans-serif;
  }

  a{
    text-decoration: none;
    color: inherit
  }
  
  li{
    list-style: none;
  }
    
  body{
    background-image: url('/src/images/pixel_art_landscape_by_inkimagine_dgz25tt-fullview.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
  }
  
`
export { GlobalStyle }