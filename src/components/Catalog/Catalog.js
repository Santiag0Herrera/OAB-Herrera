import Card from '../Card/Card';
import './Catalog.css';

const prodCatalog = ({children}) => {
    let dataProduct ={
        title : 'Cloro',
        description : 'Vidon de cloro 10lts para piletas. Aplicar con cautela y mantener fuera del alcance de menores.',
        price : '1500',
        image : 'http://d3ugyf2ht6aenh.cloudfront.net/stores/001/047/557/products/cloro-al-90-211-047eddd95e25553f0a16442692487085-640-0.jpg'
    }
    return(
        <div className='productList'>
            <h2> {children} </h2>
            <div className="catalog">
                <Card data={dataProduct}/>
                <Card data={dataProduct}/>
                <Card data={dataProduct}/>
                <Card data={dataProduct}/>
                <Card data={dataProduct}/>
                <Card data={dataProduct}/>
            </div>
        </div>
    )
}

export default prodCatalog;