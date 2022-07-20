import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

<<<<<<< HEAD
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from "react-router-dom"
=======
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
>>>>>>> 4069b1c51e162e331fd12630cecc387dbcf62783

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
<<<<<<< HEAD
    {/* <ChakraProvider> */}

    <App />

    {/* </ChakraProvider> */}
  
    
=======
      <ChakraProvider>
        <App />
      </ChakraProvider>
>>>>>>> 4069b1c51e162e331fd12630cecc387dbcf62783
    </BrowserRouter>
  </React.StrictMode>
);
