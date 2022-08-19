import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss';
import { TopHeader, Header, Footer } from './components';
import { Home, AllProductsList } from './screens'
const App = () => {
  return (
    <BrowserRouter>
      <TopHeader />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productsList" element={<AllProductsList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );

};

export default App;