import React from "react";
import '../styles/modal.css'
import Carta from "./cartas"; 
import {v4 as uuidv4} from "uuid"
import ReactModal from 'react-modal'
const Modales = (props) =>{

    return(
        <ReactModal
            isOpen={props.verificar}
            style={{
                overlay: {
                  width : '100vw',
                  height : '100vh',
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  display : 'flex',
                  alignItems : 'center',
                  justifyContent : 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.75)'
                },
                content: {
                  position : 'relative',
                  display : 'flex',
                  flexDirection : 'column',
                  width: '1000px',
                  height: '550px',
                  border: '1px solid #ccc',
                  background: '#fff',
                  overflow: 'auto',
                  WebkitOverflowScrolling: 'touch',
                  borderRadius: '4px',
                  outline: 'none',
                  padding: '20px'
                }
              }}
        >
            <section className="cartas">
              <Carta
                key = {uuidv4()}  
                id = {uuidv4()}
                class = "carta-juego"
                tipo = "Personaje"
                nombre = "Operario de equipo mediano"
                descripcion = "Al desplegar esta carta, desatarás el poder del 'Maestro de la Versatilidad' y tus proyectos se moverán con una sincronización perfecta. Su capacidad para adaptarse a diferentes tareas y su dominio de la maquinaria mediana te permitirán completar cada fase del proyecto con eficiencia y precisión."
                imagen = "operador_equipo_mediano"
                />
                <Carta
                key = {uuidv4()}  
                id = {uuidv4()}
                class = "carta-juego"
                tipo = "Personaje"
                nombre = "Operario de equipo mediano"
                descripcion = "Al desplegar esta carta, desatarás el poder del 'Maestro de la Versatilidad' y tus proyectos se moverán con una sincronización perfecta. Su capacidad para adaptarse a diferentes tareas y su dominio de la maquinaria mediana te permitirán completar cada fase del proyecto con eficiencia y precisión."
                imagen = "operador_equipo_mediano"
                />
                <Carta
                key = {uuidv4()}  
                id = {uuidv4()}
                class = "carta-juego"
                tipo = "Personaje"
                nombre = "Operario de equipo mediano"
                descripcion = "Al desplegar esta carta, desatarás el poder del 'Maestro de la Versatilidad' y tus proyectos se moverán con una sincronización perfecta. Su capacidad para adaptarse a diferentes tareas y su dominio de la maquinaria mediana te permitirán completar cada fase del proyecto con eficiencia y precisión."
                imagen = "operador_equipo_mediano"
                />
              </section>
            <button onClick={props.cerrar} id="carta-boton">Cerrar</button>
        </ReactModal>
    )
}
export default Modales;