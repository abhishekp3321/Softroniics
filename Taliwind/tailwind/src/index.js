import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Test } from "./Test";
import { Education } from "./Education";
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
// import { Main } from "./Main";
import { Home } from "./Home";
import { About } from "./About";
import { Contact } from "./Contact";
import { Inde } from "./Inde";
import { Toogle } from "./Toogle";
import { Callback } from "./Callback";
import { Fetching } from "./Fetching";
import { Api } from "./Api";
import { Ap } from "./Ap";
import { Movie } from "./Movie";
import { Movied } from "./Movied";
import { Wheather } from "./Wheather";
import { Formset } from "./Formset";
import { Foorm } from "./Foorm";
import { Keypro } from "./Keypro";
import Mainnnn from "./rendering/Mainnnn";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path="/main" element={<Main></Main>}></Route>
  //       <Route path="/home" element={<Home></Home>}></Route>
  //       <Route path="/about" element={<About></About>}></Route>
  //       <Route path="/contact" element={<Contact></Contact>}></Route>
  //       <Route path="/movie" element={<Movie></Movie>}></Route>
  //       <Route path="/movied/:id" element={<Movied></Movied>}></Route>
  //       <Route path="/wheather" element={<Wheather></Wheather>}></Route>
  //       <Route path="/formset" element={<Formset></Formset>}></Route>
  //       <Route path="/formdata" element={<Foorm />}></Route>
  //       <Route path="/key" element={<Keypro />}></Route>
  //     </Routes>
  //   </BrowserRouter>
  // </React.StrictMode>
<Mainnnn></Mainnnn>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
