import React from "react";
import '../styles/cartas.css'
const Carta = (props) =>{
    if(props.tipo === "Personaje" || props.tipo === "Evento"){
        return(
            <>
                <div className="carta">
                    <h3>{props.nombre}</h3>
                    <img src={require(`../img/Cartas/${props.imagen}.JPG`)} alt="carta-imagen"/>
                    <p>{props.descripcion}</p>
                </div>
            </>
        )
    }
    else if(props.tipo === "Obra"){
        return(
            <> 
                <div className="carta">
                    <h3>{props.nombre}</h3>
                    <p>Presupuesto: {props.descripcion}</p>
                    <p>Desarrollo: {props.tiempo}</p>
                </div>
            </>
        )
    }
}

export default Carta;