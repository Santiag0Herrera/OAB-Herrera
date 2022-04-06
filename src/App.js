import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Components
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
//Pages
import HomePage from "./Pages/Home/Home";
import ErrorPage from "./Pages/Error/Error404";
import Info from "./Pages/Info/Info";
import Cart from "./Pages/Cart/Cart";
import Account from "./Pages/Account/Account";
import Productos from "./Pages/Productos/Productos";
//Style
import './App.css';

const App= () => {
  // const [pokemons, setPokemons] = useState([])
  // useEffect(() => {
  //   fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=200')
  //     .then((response) => response.json())
  //     .then((data) => setPokemons(data.results))
  // })
  return (
    <BrowserRouter>
        <NavBar className="headerBar"/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="*" element={<ErrorPage/>}/>
        <Route path="/info" element ={<Info/>}/>
        <Route path="/cart" element ={<Cart/>}/>
        <Route path="/productos/:id" element ={<Productos/>}/>
        <Route path="/account" element ={<Account/>}/>
          {/* {pokemons.map((pokemon) => (
            <div>{pokemon.name}</div>
          ))} */}
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
