import React from "react";
import ReactDOM from "react-dom";
import { Editor } from "./components/Editor";
import "./main.scss";
import "./userWorker";

ReactDOM.render(
  <React.StrictMode>
    <Editor />
  </React.StrictMode>,
  document.getElementById("root")
);
