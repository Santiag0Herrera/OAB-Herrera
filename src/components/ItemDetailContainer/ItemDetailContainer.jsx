import React, {useState, useEffect} from "react";
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const Catalog = [
        {
            id: 1,
            title : 'Cloro',
            description : 'Vidon de cloro 10lts para piletas. Contiene contenidos toxicos y daninos al contacto con la piel, porfavor aplicar con cautela y mantener fuera del alcance de menores.',
            price : 1500,
            image : 'http://d3ugyf2ht6aenh.cloudfront.net/stores/001/047/557/products/cloro-al-90-211-047eddd95e25553f0a16442692487085-640-0.jpg',
            stock: 5
        },
        {
            id: 2,
            title : 'Tecla de luz',
            description : 'Interruptor de plastico, color blanco, tipo switch on switch off para uso no profesional. Incluye juego de tornillos.',
            price: 850,
            image : 'https://media.istockphoto.com/photos/white-light-switch-in-the-on-position-picture-id136283726?k=20&m=136283726&s=612x612&w=0&h=X8bYit-uXfnPyVCmMQnc4ec19MerGT9MUlOYMCfqM_0=',
            stock: 10
        },
        {
            id: 3,
            title : 'Cloro 2',
            description : 'Vidon de cloro 10lts para piletas. Contiene contenidos toxicos y daninos al contacto con la piel, porfavor aplicar con cautela y mantener fuera del alcance de menores.',
            price : 1500,
            image : 'http://d3ugyf2ht6aenh.cloudfront.net/stores/001/047/557/products/cloro-al-90-211-047eddd95e25553f0a16442692487085-640-0.jpg',
            stock: 5
        },
        {
            id: 4,
            title : 'Tecla de luz 2',
            description : 'Interruptor de plastico, color blanco, tipo switch on switch off para uso no profesional. Incluye juego de tornillos.',
            price: 850,
            image : 'https://media.istockphoto.com/photos/white-light-switch-in-the-on-position-picture-id136283726?k=20&m=136283726&s=612x612&w=0&h=X8bYit-uXfnPyVCmMQnc4ec19MerGT9MUlOYMCfqM_0=',
            stock: 10
        }
    ];

    const [productsInfo, setProductsInfo] = useState([]) //useState([]) = array vacio
    const getProducts = () => {
            return new Promise ((resolve, reject) => {
                setTimeout( ()=>{ return resolve(Catalog);} , 2000);
        });
    }
    useEffect(()=>{
        getProducts().then((data)=>{
            setProductsInfo(data);
        })
    });

    return(
        <div className="ProductDetailList">
            {productsInfo.map((productInfo) => {
                const {id} = productInfo;
                return(
                    <ItemDetail data={productInfo} key={id}/>
                )
            })}
        </div>
    )
}

export default ItemDetailContainer;