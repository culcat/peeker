import React from 'react';
import {Route, Routes} from "react-router-dom";
import Main from './pages/Main'
import './index.css';
import './fonts/stylesheet.css'
import SearchPage from "./pages/SearchPage";
function App() {

  return (
    <>
    <Routes>
      <Route path="/"  element={<Main/>} />
      <Route path='/search' element={<SearchPage/>}/>
    </Routes>
    </>

  );
}

export default App;
