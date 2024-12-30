import logo from './logo.svg';
import './App.css';
import { Loginform } from './Loginform';
import { Regform } from './Regform';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <>
      <BrowserRouter>
      <Routes>
      <Route path="/login" element={<Loginform/>}></Route>
      <Route path="/register" element={<Regform/>}></Route>
      </Routes>
     </BrowserRouter>
      </>
    </div>
  );
}

export default App;
