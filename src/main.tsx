import "./styles.css";

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className='App'>
      <h1>Lexical</h1>
      <App />
    </div>
  </React.StrictMode>
);
