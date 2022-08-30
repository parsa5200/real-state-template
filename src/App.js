import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TopHeader, Header, Footer, ShowProperty, CustomDropDown2, TableHeaderNav } from "./components";
import { FirstRegister } from "./components/Register";
import { Home, AllProductsList } from "./screens";
const App = () => {
  return (
    <BrowserRouter>
      <TopHeader />
      <Header />
      {/* <CustomDropDown2 icon="fa-solid fa-grid" internalTitle="dropdown" buttonColor="red">
       <FirstRegister/>
      </CustomDropDown2> */}
      {/* <TableHeaderNav /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productsList" element={<AllProductsList />} />
        <Route path="/flat/:slug" element={<ShowProperty />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
