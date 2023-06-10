import React from "react";
import '../styles/modal.css'
const Modal = (props) =>{

    return(
        <>
            {props.setModal &&
                <section className="Overlay">
                    <div className="contenedor">
                        <div className="encabezado">
                            <h3>Cartas</h3>
                            <button onClick={props.setModal(false)}>X</button>
                        </div>
                    </div>

                </section>
            }
        </>
    )
}
export default Modal;