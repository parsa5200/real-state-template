import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TopHeader, Header, Footer, ShowProperty } from "./components";
import { Home, AllProductsList, About, Blogs } from "./screens";
const App = () => {
  return (
    <BrowserRouter>
      <TopHeader />
      <Header />
      <Routes>
        <Route path="/flat/:slug" element={<ShowProperty />} />
        <Route path="/productsList" element={<AllProductsList />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
