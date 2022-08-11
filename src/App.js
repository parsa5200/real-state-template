import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss';
import FlatDetail from "./components/FlatDetail"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Contact from "./components/Contact"
import About from "./components/About"
import Blog from "./components/Blog"
import BlogDetail from "./components/BlogDetail"
import HeaderIcon from './components/HeaderIcon';
import AddProperty from './components/AddProperty';
const App = () => {
  return (
    <BrowserRouter>
      <HeaderIcon />
      {/* <Header /> */}
      {/* <Routes>
        <Route path="/" exact component={Home}       ></Route>
        <Route path="/contact" component={Contact}    ></Route>
        <Route path="/about" component={About}      ></Route>
        <Route path="/blog" exact component={Blog}       ></Route>
        <Route path="/blog/:id" component={BlogDetail} ></Route>
        <Route path="/flat/:slug" component={FlatDetail} ></Route>
        <Route path="/AddProperty" component={AddProperty}></Route>
      </Routes> */}
      {/* <Footer /> */}

    </BrowserRouter>
  );

};

export default App;