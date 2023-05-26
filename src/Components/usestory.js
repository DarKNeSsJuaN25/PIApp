import React from "react";
import NavBar from "./navbar";
import '../styles/usestory.css'
const UseStory = () =>{
    return(
        <>
            <NavBar/>
                <section className="producto">
                    Cartas:
                    <div className="personajes">
                        <p>Personajes: Cartas que el jugador coloca en el tablero y  ayudan a la obra</p>
                        <section className="contenido-personajes">
                            <ul className="personajes-lista">
                                <li>Peon</li>
                                <li>Oficial</li>
                                <li>Operario</li>
                                <li>Operario de equipo mediano</li>
                                <li>Operario topografico</li>
                                <li>Operador de equipo pesado</li>
                                <li>Obrero primicio</li>
                                <li>Obrero experto</li>
                                <li>Promotor</li>
                                <li>Maestro de obra</li>
                                <li>Arquitecta</li>
                                <li>Control de calidad</li>
                            </ul>
                            <div className="personajes-imagenes">
                                <img src={require("../img/obrero_primicio.png")} alt="i"></img>
                                <img src={require("../img/obrero_experto.png")} alt="i2"></img>
                            </div>
                        </section>
                    </div>
                    <div className="cartas">

                    </div>
                </section>
                <section className="imagenes">
                    Imagenes prototipo
                </section>

        </>
    );
}
export default UseStory;