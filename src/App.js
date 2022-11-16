import React from "react";
import { Routes, Route } from "react-router-dom";

import '../src/css/App.css'
import {Header} from './pages/Header'
import MainPage from './pages/MainPage';
import AddItem from './pages/AddItemPage';
import SubSectionPage from './pages/SubSectionPage';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
          <Route path="*" element={<MainPage />}></Route>
          <Route exact path="/addItem" element={<AddItem />}></Route> 
          <Route path="/subItems" element={<SubSectionPage />}></Route>
      </Routes>
    </div>
  );
};

export default App;
