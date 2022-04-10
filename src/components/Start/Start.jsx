import React from 'react';
import BackgroundVideo from "../video/fondo.mp4";
import '../../Pages/Home/Home.css';
import './Start.css'

const start = () => {
    return( 
        <>
        <div className='startImage'>
            <video autoPlay loop muted style={{
                position: "absolute",
                width: "100%",
                height:"100%",
                objectFit: "cover",
                zIndex: "-1",
                top: "0"
            }}>
                <source src={BackgroundVideo} type="video/mp4"/>
            </video>
            <div className='MainTitle'>
                <h1>OAB</h1>
                <p>Tenemos lo que necesitas y lo que no tambien!</p>
            </div>
        </div>
        </>
        
    )
}

export default start;