import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TopHeader, Header, Footer, ShowProperty} from "./components";
import { Home, AllProductsList } from "./screens";
const App = () => {
  return (
    <BrowserRouter>
      <TopHeader />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productsList" element={<AllProductsList />} />
        <Route path="/flat/:slug" element={<ShowProperty />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default App;
