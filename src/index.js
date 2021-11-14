import React from "react";
import  ReactDOm  from "react-dom";
import "./index.css";
import App from "./App";
import {BrowserRouter } from "react-router-dom";

 ReactDOm.render(
 <BrowserRouter>
 <App /></BrowserRouter>, document.getElementById("root"));
 