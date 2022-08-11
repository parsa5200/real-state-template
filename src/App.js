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
import { BrowserRouter, Router, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <HeaderIcon />
      <Header />
      <Router>
        <Route path="/" exact component={Home}       ></Route>
        <Route path="/contact" component={Contact}    ></Route>
        <Route path="/about" component={About}      ></Route>
        <Route path="/blog" exact component={Blog}       ></Route>
        <Route path="/blog/:id" component={BlogDetail} ></Route>
        <Route path="/flat/:slug" component={FlatDetail} ></Route>
        <Route path="/AddProperty" component={AddProperty}></Route>
      </Router>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
