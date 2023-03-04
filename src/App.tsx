import React from 'react';
// import {FunctionComponent} from 'react';
import HomePage from "./components/pages/home/home.page"

import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';

function App() {
 return(

   
    <BrowserRouter>
<Routes>
  <Route path="/" element={< HomePage />} />

</Routes>
    </BrowserRouter>
 
 )
}

export default App;
