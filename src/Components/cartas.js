import React from "react";
import '../styles/cartas.css'
const Carta = (props) =>{
    return(
        <> 
            <div className="carta">
                <h3>{props.nombre}</h3>
                <p>Presupuesto: {props.presupuesto}</p>
                <p>Desarrollo: {props.desarrollo}</p>
            </div>
        </>
    )
}

export default Carta;