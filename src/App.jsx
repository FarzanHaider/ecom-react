import React from 'react'

import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Home from './components/Home';
import Signup from './components/Signup';
import Shop from './components/Shop';


const App = () => {
  return (
    <>
 <BrowserRouter>
      <Routes>
       
          <Route path="/" element={<Home />} />
          <Route path="/Signup" element={<Signup/>} />
          <Route path="/Shop" element={<Shop />} />
         
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
