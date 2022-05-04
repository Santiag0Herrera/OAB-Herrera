import React from "react";
import info from "../../SVGs/info.svg"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from "react-router-dom";
import './Info.css';

const Info = () => {
    return(
        <>
            <div className='startImage'>
                <div className='MainTitleContent'>
                    <h1>Sobre Nosotros</h1>
                </div>
                <div className='ilustration'>
                    <img src={info} className="ilustration"></img>
                </div>
            </div>
            <div>
                <div className="infoSections">
                    <div className="section">
                        <h2>¿Quienes somos?</h2>
                        <div className="descrip">
                            <p>Somos una empresa re-vendedora de productos eléctricos, para el cuidado de piletas y vinos importados. Contamos con grandes proveedores de mercadería de primera linea y stock aplio. El precio de venta que figura en nuestro <Link to={'/'}>Catalogo</Link> al por menor. En caso de necesitar una aplia cantidad de los mismos podes contactarnos para poder hacer un pedido aun más personalizado.</p>
                        </div>
                    </div>
                    <div className="section">
                        <h2>¿Como encontrarnos?</h2>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3292.332077683625!2d-58.89141768416508!3d-34.39290445388243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bb6326394e83e7%3A0x74f0646d68a259d2!2sBarrio%20Santa%20Luc%C3%ADa%20-%20Pilar%20del%20Este!5e0!3m2!1ses-419!2sar!4v1651534935134!5m2!1ses-419!2sar" width="1000px" height="500px" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="section">
                        <h2>Ponte en contacto!</h2>
                        <div className="social">
                            <div className="socialMedia">
                                <InstagramIcon/>
                                <p>Instagram</p>
                            </div>
                            <div className="socialMedia">
                                <FacebookIcon/>
                                <p>Facebook</p>
                            </div>
                            <div className="socialMedia">
                                <WhatsAppIcon/>
                                <p>WhatsApp</p>
                            </div>
                            <div className="socialMedia">
                                <EmailIcon/>
                                <p>Mail</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Info;