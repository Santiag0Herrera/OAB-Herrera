import React from 'react';
import BackgroundVideo from "../video/fondo.mp4";
import '../../Pages/Home/Home.css';
import './Start.css'

const start = () => {
    return( 
        <>
        <div className='startImage'>
            <video autoPlay loop muted style={{
                width: "100%",
                height:"90%",
                objectFit: "cover",
                zIndex: "0",
                top: "0"
            }}>
                <source src={BackgroundVideo} type="video/mp4"/>
            </video>
        </div>
        <h1>OAB</h1>
        </>
        
    )
}

export default start;