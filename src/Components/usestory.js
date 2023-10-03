import React from "react";
import NavBar from "./navbar";
import { useState } from "react";
import { v4 as uuidv4} from "uuid";
import '../styles/usestory.css'
import Carta from "./cartas";

const UseStory = () =>{
    const [seleccion, setseleccion] = useState("")
    const elegirCarta = (e) =>{
        setseleccion(e.target.value)
    }
    return(
        <>
            <NavBar/>
                <section className="usestory-informacion-general">
                    Aca va la informacion general
                </section>
                <div className="seleccionar-informacion">
                    <p>Seleccionar el tipo de carta:</p>
                    <select className="seleccionar-carta" onChange={elegirCarta}>
                        <option value="default"></option>
                        <option value="Personajes">Personajes</option>
                        <option value="Eventos">Eventos</option>
                        <option value="Partidas">Partidas</option>
                        <option value="Proyectos">Proyectos</option>
                    </select>
                </div>
                <section className="producto">
                    {seleccion === "Personajes" &&(
                        <section className="personajes">
                            <p>Personajes: Cartas que el jugador coloca en el tablero y  ayudan a la obra</p>
                            <section className="personajes-cartas">
                            <Carta
                                key = {uuidv4()}
                                id = {uuidv4()}
                                juego = {false}
                                tipo = "Personaje"
                                nombre = "Operario de equipo mediano"
                                descripcion = "Al desplegar esta carta, desatarás el poder del 'Maestro de la Versatilidad' y tus proyectos se moverán con una sincronización perfecta. Su capacidad para adaptarse a diferentes tareas y su dominio de la maquinaria mediana te permitirán completar cada fase del proyecto con eficiencia y precisión."
                                imagen = "operador_equipo_mediano"
                            />
                            <Carta
                                key = {uuidv4()}
                                id = {uuidv4()}
                                juego = {false}
                                tipo = "Personaje"
                                nombre = "Operario topográfico"
                                descripcion = "El 'Maestro de las Tierras' se mueve con gracia entre las colinas y valles, desentrañando los enigmas del paisaje. Su conocimiento experto de las coordenadas y su habilidad para interpretar los datos topográficos lo convierten en el cartógrafo supremo de la construcción"
                                imagen = "operador_topografico"
                            />
                            <Carta
                                key = {uuidv4()}
                                id = {uuidv4()}
                                juego = {false}
                                tipo = "Personaje"
                                nombre = "Operador de equipo pesado"
                                descripcion = "El 'Titán de la Maquinaria' es un experto en la coreografía de acero y hierro. Su capacidad para despejar obstáculos y crear plataformas sólidas es tan impresionante que puede levantar y transportar edificios enteros con gracia y precisión"
                                imagen = "operador_equipo_pesado"
                            />
                            <Carta
                                key = {uuidv4()}
                                id = {uuidv4()}
                                juego = {false}
                                tipo = "Personaje"
                                nombre = "Operario electromecánico"
                                descripcion = "Al desplegar esta carta, liberarás el poder del 'Maestro de las Energías' y tus construcciones cobrarán vida. Sus conexiones electrónicas y su maestría en el control de energía permitirán que tus proyectos funcionen con eficiencia y precisión, superando cualquier obstáculo."
                                imagen = "operador_electromecanico"
                            />
                            <Carta
                                key = {uuidv4()}
                                id = {uuidv4()}
                                juego = {false}
                                tipo = "Personaje"
                                nombre = "Soldador Homologado 6G"
                                descripcion = "En las fauces del fuego y las chispas incandescentes, surge un ser cuya habilidad con la antorcha y el acero es legendaria. El 'Forjador del Destino' es un soldador de obra inigualable, cuyas manos hábiles y mirada ardiente pueden moldear el metal con destreza divina"
                                imagen = "soldador_homologado"
                            />
                            <Carta
                                key = {uuidv4()}
                                id = {uuidv4()}
                                juego = {false}
                                tipo = "Personaje"
                                nombre = "Capataz"
                                descripcion = "En el centro de la obra, emerge un líder de carácter indomable y una presencia imponente. El 'Maestro del Comando' es el Capataz supremo, cuya habilidad para dirigir y coordinar equipos de trabajo es legendaria. Con su voz de autoridad y su mirada penetrante, inspira disciplina y alcanza la excelencia en cada proyecto"
                                imagen = "capataz"
                            />
                            
                            </section>
                        </section>
                    )}
                    {seleccion === "Eventos" &&(
                        <section className="personajes">
                            <p>Personajes: Cartas que el jugador coloca en el tablero y  ayudan a la obra</p>
                            <section className="personajes-cartas">
                            <Carta
                                key = {uuidv4()}
                                id = {uuidv4()}
                                class = "carta"
                                tipo = "Evento"
                                nombre = "Granizo"
                                descripcion = "El capataz es el capataz"
                            />
                            <Carta
                                key = {uuidv4()}
                                id = {uuidv4()}
                                class = "carta"
                                tipo = "Evento"
                                nombre = "Granizo"
                                descripcion = "El capataz es el capataz"
                            />
                            <Carta
                                key = {uuidv4()}
                                id = {uuidv4()}
                                class = "carta"
                                tipo = "Evento"
                                nombre = "Granizo"
                                descripcion = "El capataz es el capataz"
                            />
                            <Carta
                                key = {uuidv4()}
                                id = {uuidv4()}
                                class = "carta"
                                tipo = "Evento"
                                nombre = "Granizo"
                                descripcion = "El capataz es el capataz"
                            />
                            <Carta
                                key = {uuidv4()}
                                id = {uuidv4()}
                                class = "carta"
                                tipo = "Evento"
                                nombre = "Granizo"
                                descripcion = "El capataz es el capataz"
                            />
                            </section>
                        </section>
                    )}
                    {seleccion === "Proyectos" &&(
                        <section className="personajes">
                            <p>Personajes: Cartas que el jugador coloca en el tablero y  ayudan a la obra</p>
                            <section className="personajes-cartas">
                            <Carta
                                key = {uuidv4()}
                                id = {uuidv4()}
                                class = "carta"
                                tipo = "Obra"
                                nombre = "Puente"
                                descripcion = "Construcción que se levanta sobre una depresión del terreno (río, canal, foso, etc.) o en otro sitio para comunicar dos lados."
                                tiempo = "7 turnos"
                            />
                            <Carta
                                key = {uuidv4()}
                                id = {uuidv4()}
                                class = "carta"
                                tipo = "Obra"
                                nombre = "Colegio"
                                descripcion = "Establecimiento donde se dedica a la enseñanza."
                                tiempo = "8 turnos"
                            />
                            <Carta
                                key = {uuidv4()}
                                id = {uuidv4()}
                                class = "carta"
                                tipo = "Obra"
                                nombre = "Posta"
                                descripcion = "Espacio en el que se desarrollan todo tipo de servicios vinculados a la salud. En estos recintos, por lo tanto, se diagnostican enfermedades y se realizan distintos tipos de tratamientos para restablecer la salud de los pacientes."
                                tiempo = "8 turnos"
                            />
                            </section>
                        </section>
                    )}
                </section>

        </>
    );
}
export default UseStory;