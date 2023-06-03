import React from "react";
import '../styles/arquetipos.css'
const Arquetipos = (props) => {
    return(
        <>
            <div className="arquetipos-cuadros">
                <p>{props.nombre}</p>
                {props.caracteristicas}
            </div>
        </>
    )
}

export default Arquetipos;