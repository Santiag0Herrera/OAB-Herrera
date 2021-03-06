import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Components
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
//Pages
import Category from "./Pages/Category/Category"
import HomePage from "./Pages/Home/Home";
import ErrorPage from "./Pages/Error/Error404";
import Info from "./Pages/Info/Info";
import Cart from "./Pages/Cart/Cart";
import Productos from "./Pages/Productos/Productos";
import './App.css';
//context
import { ThemeProvider } from "./context/ThemeContext";
import { CartProvider } from "./context/CartContext";

const App= () => {
  return (
    <CartProvider><ThemeProvider>
      <BrowserRouter>
          <NavBar className="headerBar"/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="*" element={<ErrorPage/>}/>
          <Route path="/info" element ={<Info/>}/>
          <Route path="/cart" element ={<Cart/>}/>
          <Route path="/Item/:id" element ={<Productos/>}/>
          <Route path="/:category/" element ={<Category/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </ThemeProvider></CartProvider>
  );
}

export default App;
