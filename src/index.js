import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Canvas from './App'
//import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Canvas />
  </StrictMode>,
  rootElement
);
