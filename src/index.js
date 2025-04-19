/*
import React from "react";
import ReactDOM from "react-dom/client"; // ⚠️ Modifier ici
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root")); 
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();*/

import React from "react";
import ReactDOM from "react-dom"; // ✅ import classique pour React 17
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root") // ✅ deuxième argument pour ReactDOM.render
);

reportWebVitals();
