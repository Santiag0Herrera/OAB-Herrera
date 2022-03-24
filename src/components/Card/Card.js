import './Card.css'

const card = ({title, description, price})=>{
    return(
        <div className='Articulos'>
            <h2>{title}</h2>
            <img src='https://www.educaciontrespuntocero.com/wp-content/uploads/2019/02/girasoles-978x652.jpg'></img>
            <div className='contenidoArticulos'>
                <p>{description}</p>
                <p>Precio: ${price}</p>
                <button>Comprar</button>
            </div>
        </div>
    )
}

export default card;