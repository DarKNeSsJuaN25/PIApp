import React from "react";
import '../styles/equipo.css'
const Equipo = (props) => {
    return(
        <div className="informacion">
            <div className="info-persona">
                <p>{props.nombre}</p>
                <p>{props.descripcion}</p>
            </div>
            <img className="img-persona" src={require(`../img/${props.imagen}.jpeg`)} alt="imagen"></img>

        </div>
    )
}
export default Equipo;