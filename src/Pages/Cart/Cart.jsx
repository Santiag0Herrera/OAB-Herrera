import React, { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import CartProductCard from "./cartProducts";
import ModalCustom from "../../components/Modal/Modal";
import { Link } from "react-router-dom";
//Style
import './Cart.css';

/////////////// FIREBASE //////////////////////////////////////
import db from '../../firebase';
import { addDoc, collection, orderBy } from "firebase/firestore";
///////////////////////////////////////////////////////////////

const Cart = () => {
    const {cartProducts, clear, total} = useContext(CartContext);
    const [openModal, setOpenModal] = useState(false);
    const [formData, setFormData] = useState(
        {
        name: '',
        phone: '', 
        email: ''
        }
    );

const [successOrder, setSuccessOrder] = useState()

////////////////////// FIREBASE //////////////////////////////////////
///////creacion de documentos y subida de campos//////////////////////
    const [order, setOrder] = useState(
        {
            buyer : formData,
            items: cartProducts.map( (cartProduct) =>{
                return{
                    id: cartProduct.id,
                    title: cartProduct.title,
                    price: cartProduct.price,
                    quantity: cartProduct.quantity
                }
            }),
            total: total
        }
    );

    const handleChange = (e) => {
        const {value, name} = e.target 
        setFormData({
            ...formData,
            [name] : value //usamos los [] para aclarar que ahi va una variable y no una propiedad llamada "e.target.name".
        })
    }

    const handleSubmit = (e) => {
        let prevOrder = {...order, 
            buyer: formData
        }
        e.preventDefault()
        setOrder({...order, 
            buyer: formData})
        pushOrder(prevOrder)
    }

    const pushOrder = async (prevOrder) => {
        const orderFirebase = collection(db, 'Ordenes')
        const orderDoc = await addDoc(orderFirebase, prevOrder)
        console.log("Orden generada: ",orderDoc)
        setSuccessOrder(orderDoc.id)
    }
///////////////////////////////////////////////////////////////

    return(
        <>  <h3>Tu carrito</h3>
            {
                cartProducts.length === 0
                ?(<>
                    <div className='quantityButton'>
                        <h4 style={{color: "white"}}>Tu carrito esta vacio</h4>
                        <Link to={'/'}><button className='buttonCart'>+ PRODUCTOS</button></Link>
                    </div>
                </>)
                :(<>
                    <div className="cartProducts">

                    {
                        cartProducts.map( (cartProduct) => {
                            return(
                                <CartProductCard data={cartProduct} key={cartProduct.id}/>
                            )
                        })
                    }

                    </div>
                    <div className="cartResume">
                        <div className="cartResumeDetail"><h3>Total: $ {total}</h3></div>
                    </div>
                    <div className='quantityButton'>
                        <button className='buttonCart' onClick={() => setOpenModal(true)}>Finalizar Compra</button>
                        <Link to={'/'}><button className='buttonCart'>+ PRODUCTOS</button></Link>
                        <button className='buttonCart' onClick={clear}>Vaciar Carrito</button>
                    </div>
                </>)
            }
            <ModalCustom className="modal" handleClose={() => setOpenModal(false)} open={openModal}>
                    {
                        successOrder? 
                        (
                            <div className="modalForm">
                                <div className="orderId"> 
                                    <h3>¡Felicitaciones!</h3>
                                </div>
                                <h4>Tu pedido se realizó exitosamente.</h4>
                                <p>(En caso de abonar mediante transferencia, espera la confirmacion del vendedor.)</p>
                                <img src="https://c.tenor.com/Jo81u8H3MTAAAAAC/woohoo-happy.gif"></img>
                                <Link to={'/'}><button className='buttonCartModal'>Aceptar</button></Link>
                                <div className="orderId">
                                    <h4>Orden: {successOrder}</h4>
                                </div>
                            </div>
                        ): 
                        (   <div className="modalForm">
                                <h3>Ingrese su Informacion</h3>
                                <form className="formInfo" onSubmit={handleSubmit}>
                                    <input type="text" name="name" placeholder="Nombre y Apellido" onChange={handleChange} value={formData.name}/>
                                    <input type="text" name="phone" placeholder="Telefono de Contacto" onChange={handleChange} value={formData.phone}/>
                                    <input type="text" name="email" placeholder="Correo Electronico" onChange={handleChange} value={formData.email}/>
                                    <button type="submit" className="send">
                                        <div className="svg-wrapper-1">
                                                <div className="svg-wrapper">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                                        <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        <span>Enviar</span>
                                    </button>
                                </form>
                            </div>
                        )
                    }
                
            </ModalCustom>
        </>
    )
}

export default Cart;