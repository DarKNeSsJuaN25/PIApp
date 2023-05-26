import React from "react";
import NavBar from "./navbar"
import Miembro from "./miembros";
import Footer from "./footer";
import '../styles/equipo.css'
const Equipo = () => {
    return(
        <>
            <section className="contenedor-1">
                <img className="equipo-imagen-1" src={require('../img/equipo.jpg')} alt="imagen-1"/> 
                <NavBar/>
                <h3>Equipo</h3>
            </section>
            <section className="equipo">
                <section className="contenido">
                    <Miembro nombre="Carlos Claros Panta" imagen="carlos" descripcion="Estudiante del tercio superior, cursando el séptimo ciclo de la carrera de Ingeniería Civil en la Universidad de Ingeniería y Tecnología (UTEC). Interesado en las áreas de recursos hídricos, geotecnia y materiales de construcción. Poseo conocimientos en inglés, uso de softwares, como: AutoCAD, Revit, Civil3D y Qgis. " link="https://www.linkedin.com/in/carlos-claros-panta/"/>
                    <Miembro nombre="Juan Diego Laredo" imagen="juan" descripcion="Estudiante de quinto ciclo de la carrera de Ciencia de la Computación en la Universidad de Ingeniería y Tecnología UTEC. Experiencia en desarrollo front-end de páginas web.  Conocimiento avanzado de los lenguajes React, Javascript y HTML. Interesado en creación de software de cualquier ámbito." link="https://www.linkedin.com/in/juandlaredo/"/>  
                </section>
                <section className="contenido">              
                    <Miembro nombre="Miguel La Torre" imagen="miguel" descripcion="Estudiante del quinto superior dentro del 5to ciclo de la carrera de Ingeniería Civil en la Universidad de Ingeniería y Tecnología UTEC. Poseo experiencia en la investigación y uso de softwares de imagen satelital, como lo son QGIS; y herramientas de Microsoft, como Word y Excel." link="https://www.linkedin.com/in/miguel-la-torre-loayza/"/>
                    <Miembro nombre="Marcos Guimoye" imagen="marco" descripcion="Estudiante de 6to ciclo de Ingeniería Civil en la Universidad de Ingeniería y Tecnológica UTEC. Con habilidades en topografía y Autocad básico, para el desarrollo de estructuras de construcción de edificaciones. Interesado en proyectos de innovación en la construcción para el desarrollo de la infraestructura." link="https://www.linkedin.com/in/marco-antonio-guimoye-machicao-345b7a251/"/>
                </section>
            </section>
            <Footer/>
        </>
    )
}
export default Equipo;