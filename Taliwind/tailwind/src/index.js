import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Test } from "./Test";
import { Education } from "./Education";
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import { Main } from "./Main";
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
import Lead from "./rendering/Lead";
import { ThemeProvider } from "react-bootstrap";

import { Teamprovider } from "./rendering/Teamprovider";
import { File } from "./rendering/File";
import { Languageprovider } from "./rendering/Languageprovider";
import { Multiple } from "./rendering/Multiple";
// import { Calculator } from "./Calculator";
import { Todolist } from "./Todolist";
import { Counter } from "./Counter";
import { Provider } from "react-redux";
import Store from "./reduxfile/Store";
import { Counterr } from "./reduxfile/Counterr";
import { Homecart } from "./reduxfile/online/Homecart";
import { Addtocart } from "./reduxfile/online/Addtocart";
import { Formhome } from "./Formhome";
import { Formview } from "./Formview";
import { Formedit } from "./Formedit";
import { Formlogin } from "./Formlogin";
import { Formprofile } from "./Formprofile";
import Nodereg from "./Nodereg";
import { Tasklogin } from "./Tasklogin";
import { Taskadd } from "./Taskadd";
import { Taskview } from "./Taskview";
import { Taskreg } from "./Taskreg";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          <Route path="/main" element={<Main></Main>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/movie" element={<Movie></Movie>}></Route>
          <Route path="/movied/:id" element={<Movied></Movied>}></Route>
          <Route path="/wheather" element={<Wheather></Wheather>}></Route>
          <Route path="/formset" element={<Formset></Formset>}></Route>
          <Route path="/formdata" element={<Foorm />}></Route>
          <Route path="/homecart" element={<Homecart />}></Route>
          <Route path="/add" element={<Addtocart />}></Route>
          <Route path="/formhome" element={<Formhome />}></Route>
          <Route path="/formview" element={<Formview />}></Route>
          <Route path="/formedit/:id" element={<Formedit />}></Route>
          <Route path="/formlogin" element={<Formlogin />}></Route>
          <Route path="/formpro" element={<Formprofile />}></Route>
          <Route path="/formregister" element={<Nodereg/>}></Route>
          <Route path="/tasklogin" element={<Tasklogin/>}></Route>
          <Route path="/taskadd" element={<Taskadd/>}></Route>
          <Route path="/taskview" element={<Taskview/>}></Route>
          <Route path="/taskreg" element={<Taskreg/>}></Route>

        </Routes>
      </BrowserRouter>
    </Provider>
    {/* <Formhome></Formhome> */}
    {/* <Formview></Formview> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
