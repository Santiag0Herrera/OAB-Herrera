import NavBar from "./components/NavBar/NavBar"
import Footer from "./components/Footer/Footer"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import './App.css'
const App= () => {
  return (
    <div>
      <div className="headerBar">
        <NavBar/>
      </div>

      <div className='body'>
        <h1>Nuestros Productos</h1>
        <ItemListContainer/>
      </div>

      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
