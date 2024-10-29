import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Demo } from "./Demo";
import { Parent } from "./parent";
import { Mapp } from "./Mapp";
import { Profilep } from "./Profilep";
import "bootstrap/dist/css/bootstrap.min.css";
import { Boot } from "./Boot";
import { Card } from "./Card";
import { Mac } from "./Mac";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
      </Routes>
    </BrowserRouter>
    <Main></Main>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
