import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss';
import { TopHeader, Header } from './components';
const App = () => {
  return (
    <BrowserRouter>
      <TopHeader />
      <Header />
      <Routes>

      </Routes>

    </BrowserRouter>
  );

};

export default App;