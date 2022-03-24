import Card from '../Card/Card';
import './Catalog.css';

const prodCatalog = ({children}) => {
    return(
        <div className='productList'>
            <h2> {children} </h2>
            <div className="catalog">
                <Card title='Cloro' description='Vidon de cloro 10lts para piletas.' price='1500'/>

                <Card title='Barrefondo' description='Limpiador de fondo para piletas de lona limpia facil ecologico' price={3000}/>

                <Card title='Vino' description='Bebida hecha de uva, mediante la fermentación alcohólica.' price={1000}/>

                <Card title='Tecla de Luz' description='Dispositivo que  desvia el curso de corriente eléctrica.' price={500}/>

                <Card title='Cloro' description='Vidon de cloro 10lts para piletas.' price='1500'/>

                <Card title='Barrefondo' description='Limpiador de fondo para piletas de lona limpia facil ecologico' price={3000}/>

                <Card title='Vino' description='Bebida hecha de uva, mediante la fermentación alcohólica.' price={1000}/>

                <Card title='Tecla de Luz' description='Dispositivo que  desvia el curso de corriente eléctrica.' price={500}/>
            </div>
        </div>
    )
}

export default prodCatalog;