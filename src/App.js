import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss';
import { TopHeader, Header } from './components';
import { Home } from './screens'
const App = () => {
  return (
    <BrowserRouter>
      <TopHeader />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

    </BrowserRouter>
  );

};

export default App;