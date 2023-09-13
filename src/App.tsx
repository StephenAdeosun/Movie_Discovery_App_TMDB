import React from 'react';
import logo from './logo.svg';
import Hero from './pages/Hero';
import MoviePage from './components/Sidebar';
import MovieDetails from './pages/MovieDetails';
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
<Route path='/' element={ <Hero/>}/>
<Route path='/movies/:id'  element={ <MovieDetails/>}/>

   </Routes>
   
   </BrowserRouter>
  );
}

export default App;