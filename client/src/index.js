import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

<<<<<<< HEAD
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
=======
import { ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter} from "react-router-dom"
>>>>>>> 92ba2e2c6bdf6c1ad74feca2f9785204931357bb

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
