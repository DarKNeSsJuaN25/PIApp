import React from "react";
import '../styles/equipo.css'
import { SocialIcon } from 'react-social-icons';

const Miembro = (props) => {
    return(
        <div className="informacion">
            <div className="info-persona">
                <div className="nombre">
                    <p>{props.nombre}</p>
                </div>
                <div className="descripcion-equipo">
                    <p>{props.descripcion}</p>            
                </div>
                <div className="social-media">
                    <SocialIcon url={props.link}/>
                </div>
            </div>
            <img className="img-persona" src={require(`../img/${props.imagen}.jpeg`)} alt="imagen"></img>
        </div>
    )
}
export default Miembro;