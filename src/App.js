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
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>

      <div>
        <Footer/>
      </div>

    </div>
  );
}

export default App
