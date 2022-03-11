import React from "react"
function NavBar(){
    return(
        <header className="mainHeader">
            <img className={"logoImg"} src="https://blog.hubspot.es/hs-fs/hubfs/ES%20Blog%20images/Los%2015%20logos%20m%C3%A1s%20creativos%20e%20inspiradores%20del%20mundo/ejemplo_logo_creativo_solo_merav.jpg?width=650&name=ejemplo_logo_creativo_solo_merav.jpg"></img>
            <ul className={"navbar"}>
                <li><button>Home</button></li>
                <li><button>Productos</button></li>
                <li><button>Contacto</button></li>
                <li><button>Carrito</button></li>
            </ul>
        </header>
    )
}
export default NavBar