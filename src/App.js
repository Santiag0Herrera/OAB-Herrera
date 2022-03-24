import NavBar from "./components/NavBar/NavBar"
import Card from "./components/Card/Card"
import Footer from "./components/Footer/Footer"
import './App.css'
function App() {
  return (
    <div>

      <div className="headerBar">
        <NavBar/>
      </div>

      <div className='body'>
        <h1>Nuestros Productos</h1>

        <div className="catalog">
          <Card title='Cloro' description='Vidon de cloro 10lts para piletas.' price='1500'/>

          <Card title='Barrefondo' description='Limpiador de fondo para piletas de lona limpia facil ecologico' price='3000'/>

          <Card title='Vino' description='Bebida hecha de uva, mediante la fermentación alcohólica.' price='1000'/>

          <Card title='Tecla de Luz' description='dispositivo que  desvia el curso de corriente eléctrica.' price='500'/>          
        </div>
      </div>

      <div>
        <Footer/>
      </div>

    </div>
  );
}

export default App
