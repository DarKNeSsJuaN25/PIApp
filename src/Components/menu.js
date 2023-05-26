import React from "react";
import NavBar from "./navbar";
import Equipo from "./equipo";
import '../styles/menu.css'
const Menu = () =>{
    return(
        <>
           <NavBar/>
            <h2>Proyecto PMBOK</h2>
            <h3>Una manera interactiva de aprender</h3>
            <section className="descripcion">
                <div className="descripcion-texto">
                    En la actualidad la Universidad de Ingeniería y Tecnología(UTEC),
                    dentro de su malla curricular ofrece cursos como “Lean Construction” o 
                    “Planeamiento de Proyectos de Construcción” en los cuales se tratan de aplicar tópicos del PMBOK. 
                    El principal problema de la enseñanza aplicando el PMBOK en UTEC, se debe al uso de una metodología de aprendizaje antigua y/o obsoleta.
                </div>
                <div className="descripcion-valor">
                    ProyectName es una iniciativa propuesta para el aprendizaje de gestion de proyectos de manera didactica y divertida.
                    Utilizando el sector de construccion, los jugadores aprenderan a planificar, ejecutar y controlar toda el area mencionada. 
                </div>
            </section>
                <section className="producto">
                    El juego trata de lo siguiente:
                    <div className="personajes">
                    Personajes:
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
                    </div>
                    <div className="cartas">

                    </div>
                </section>
                <section className="imagenes">
                    Imagenes
                </section>
            <section className="arquetipos">
                <div className="mision">
                    <p>Mision</p>
                    Construir una alternativa viable para los estudiantes de construccion.
                </div>
                <div className="vision">
                    <p>Vision</p>
                    Aprobacion y reconocimiento en instituciones publicas y privadas alrededor del pais.
                </div>
                <div className="valores">
                    <p>Valores</p>
                    Compromiso, dedicacion y esfuerzo
                </div>
            </section>
            <section className="equipo">
                    <Equipo nombre="Carlos Claros Panta" imagen="carlos" descripcion="Estudiante del tercio superior, cursando el séptimo ciclo de la carrera de Ingeniería Civil en la Universidad de Ingeniería y Tecnología (UTEC). Interesado en las áreas de recursos hídricos, geotecnia y materiales de construcción. Poseo conocimientos en inglés, uso de softwares, como: AutoCAD, Revit, Civil3D y Qgis. "/>
                    <Equipo nombre="Juan Diego Laredo" imagen="juan" descripcion="Estudiante de quinto ciclo de la carrera de Ciencia de la Computación en la Universidad de Ingeniería y Tecnología UTEC. Experiencia en desarrollo front-end de páginas web."/>                
                    <Equipo nombre="Miguel La Torre" imagen="miguel" descripcion="Estudiante del quinto superior dentro del 5to ciclo de la carrera de Ingeniería Civil en la Universidad de Ingeniería y Tecnología UTEC. Poseo experiencia en la investigación y uso de softwares de imagen satelital, como lo son QGIS; y herramientas de Microsoft, como Word y Excel."/>
                    <Equipo nombre="Marcos Oyacuche" imagen="miguel" descripcion="Estudiante de ingenieria civil"/>
            </section>
            <footer className="foot">
                <p>&copy; 2023</p>
                <ul className="foot-info">
                    <li><a href="mailto:juan.laredo@utec.edu.pe">Contactar</a></li>
                    <li><a>991174346</a></li>
                </ul>
            </footer>
        </>
    )
}

export default Menu;