import React, { useEffect, useState } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import {useParams} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import '../../components/ItemList/ItemList.css';

/////////////// FIREBASE //////////////////////////////////////
import { doc, getDoc } from "firebase/firestore";
import db from '../../firebase'
///////////////////////////////////////////////////////////////

const Productos = () => {
    const {id} = useParams();
    const [producto, setProduct] = useState([]);
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    // OBTENEMOS LA INFO DEL PRODUCTO CON FIREBASE //
    const getProduct = async() => {
        const docRef = doc(db, "Catalog", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            // console.log("Document data:", docSnap.data());
            let product = docSnap.data()
            product.id = docSnap.id
            setProduct(product)
            setLoading(false)
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            navigate('error!')
        }
    }
    ////////////////////////////////////////////////

    useEffect( () => {
        setLoading(true)
        getProduct()
    }, []);

    return(
        <div className="ContainerDetail">
            {
                loading ?
                (<div className="spinner"></div>)
                :
                (<ItemDetail data={producto}/>)
            }
        </div>
    );
};

export default Productos;