import React, {useState, useEffect} from 'react';
import Card from '../Item/Item';
import './ItemList.css';

const ItemList = () => {
    //Array de productos (deberia ser un bbdd).
    const Catalog = [{
            id: 1,
            title : 'Cloro',
            description : 'Vidon de cloro 10lts para piletas. Aplicar con cautela y mantener fuera del alcance de menores.',
            price : '1500',
            image : 'http://d3ugyf2ht6aenh.cloudfront.net/stores/001/047/557/products/cloro-al-90-211-047eddd95e25553f0a16442692487085-640-0.jpg',
            stock: 5

        },
        {
            id: 2,
            title : 'Tecla de luz',
            description : 'Interruptor de plastico para uso no profesional o uso cotidiano en el hogar.',
            price : '860',
            image : 'https://media.istockphoto.com/photos/white-light-switch-in-the-on-position-picture-id136283726?k=20&m=136283726&s=612x612&w=0&h=X8bYit-uXfnPyVCmMQnc4ec19MerGT9MUlOYMCfqM_0=',
            stock: 10
        },
        {
            id: 3,
            title : 'Cloro 2',
            description : 'Vidon de cloro 10lts para piletas. Contiene contenidos toxicos y daninos al contacto con la piel, porfavor aplicar con cautela y mantener fuera del alcance de menores.',
            price : '1500',
            image : 'http://d3ugyf2ht6aenh.cloudfront.net/stores/001/047/557/products/cloro-al-90-211-047eddd95e25553f0a16442692487085-640-0.jpg',
            stock: 5
        },
        {
            id: 4,
            title : 'Tecla de luz 2',
            description : 'Interruptor de plastico, color blanco, tipo switch on switch off para uso no profesional. Incluye juego de tornillos.',
            image : 'https://media.istockphoto.com/photos/white-light-switch-in-the-on-position-picture-id136283726?k=20&m=136283726&s=612x612&w=0&h=X8bYit-uXfnPyVCmMQnc4ec19MerGT9MUlOYMCfqM_0=',
            stock: 10
        }
    ];
    //State donde almacenaremos los productos que obtengamos de ItemList (array vacio).
    const [dataProducts, setDataProducts] = useState([]);
    // Promise con useEffect que devuelve los productos de ItemList.
    const getProducts = () => {
        return new Promise ((resolve, reject)=>{
            setTimeout(()=>{
                return resolve(Catalog);
            }, 2000);//A los 2 seg "resolve" devuelve los valores de ItemList,
        })
    }
    //El useEffect (se ejecuta despues de que se renderiza) llamada a la promesa de "getProducts" y con el ".then" devuelve "data" = obj del array "ItemList".
    useEffect( () => {
        getProducts().then((data)=>{
                setDataProducts(data) //la guarda en el state de productos "setDataProducts" que es la funcion que se ejecuta para modificar el state vacio, con la respuesta de la promesa (los productos del array).
            }
        );
    },);
    //como modificamos un state, el return se vuelve a renderizar ya con el "{console.log("Products: ", dataProducts)}" lleno con los objetos del array ItemList.
    return(
        <div className='productList'>
            <div className="catalog">
                {dataProducts.map( (product) => {
                    const {id} = product;
                    return(
                        <Card data={product} key={id}/>
                    );
                } )}
            </div>
        </div>
    )
}

export default ItemList;