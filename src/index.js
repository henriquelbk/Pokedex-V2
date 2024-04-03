import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import { ChakraProvider } from "@chakra-ui/react";
import PokemonProvider from "./contexts/PokeContext";

const GlobalStyle = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
  }
  
  body {
    height: auto;
  
  font-family: 'Inter', sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #5d5d5d !important;
}

code {
  font-family: sans-serif;
}
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <PokemonProvider>
    <ChakraProvider>
      <React.StrictMode>
        <GlobalStyle />
        <App />
      </React.StrictMode>
    </ChakraProvider>
  </PokemonProvider>
);
