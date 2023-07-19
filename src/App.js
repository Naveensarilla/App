import React from 'react';
import {BrowserRouter as Router ,Routes,Route}from 'react-router-dom';
import  Footer  from '../src/components/UG/Footer';
import Landingpage from "../src/Landingpage";
import Home from './components/UG/Home';


const App = () => {
  return (
  <Router>
 {/* <Home/> */}
    <Routes>
    <Route path='/' element={ < Landingpage/>} />
    <Route path='/home' element={ <Home/> }/>
   
    
    </Routes>
<Footer/>
  </Router>
  );
}

export default App;