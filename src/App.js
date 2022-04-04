import React from "react"
import NavBar from "./components/NavBar/NavBar"
import Footer from "./components/Footer/Footer"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import './App.css'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
const App= () => {
  // const [pokemons, setPokemons] = useState([])
  // useEffect(() => {
  //   fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=200')
  //     .then((response) => response.json())
  //     .then((data) => setPokemons(data.results))
  // })

  return (
    <div>
      <div className="headerBar">
        <NavBar/>
      </div>
      <div className='body'>
        <h2>Nuestros Productos</h2>
        <ItemListContainer greeting="¡Lo ultimo en nuestro Catalogo!"/>
        <ItemDetailContainer/>
        {/* {pokemons.map((pokemon) => (
          <div>{pokemon.name}</div>
        ))} */}
        <Footer/>
      </div>
    </div>
  );
}

export default App;
