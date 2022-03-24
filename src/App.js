import NavBar from "./components/NavBar/NavBar"
import Footer from "./components/Footer/Footer"
import Catalog from "./components/Catalog/Catalog"
import './App.css'
const App= () => {
  return (
    <div>
      <div className="headerBar">
        <NavBar/>
      </div>

      <div className='body'>
        <h1>Nuestros Productos</h1>
        <Catalog>
          <p> Oferta </p>
        </Catalog>

        <Catalog>
          <p> Lo mas nuevo </p>
        </Catalog>
      </div>

      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
