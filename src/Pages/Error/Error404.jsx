import React from "react";
//Style
import './Error404.css';

const ErrorPage = () => {
    return(
        <>
            <div className="trumpError">
                <h3>Error 404!</h3>
                <img src="https://c.tenor.com/tX_T48A14BwAAAAd/khaby-really.gif"/>
                <h4>( Esta página no existe... )</h4>
            </div>
        </>
    )
}

export default ErrorPage;