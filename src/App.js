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
        <h2>Nuestros Productos</h2>
        <ItemListContainer/>
        <br></br><div><br></br></div><br></br>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
