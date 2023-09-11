import React from 'react';
import logo from './logo.svg';
import Hero from './pages/Hero';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
function App() {
  return (
   <BrowserRouter>
   <Routes>
<Route path='/'  element={ <Hero/>}/>

   </Routes>
   
   </BrowserRouter>
  );
}

export default App;