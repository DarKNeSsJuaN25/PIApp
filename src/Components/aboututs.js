import React from "react";
import Arquetipos from "./arquetipos";
import NavBar from "./navbar";
import '../styles/aboutus.css'
import Footer from "./footer";
const AboutUs = () =>{
    return(
        <>
            <section className="contenedor-principal-aboutus">
                <img className="img-contenedor-principal" src={require(`../img/aboutus.jpg`)} alt="ipa"></img>
                <NavBar/>
                <h3>Sobre Nosotros</h3>
            </section>
            <section className="titulos">
                <div className="contexto">
                    Contexto
                </div>
                <div className="accion">
                    Nuestra propuesta
                </div>
            </section>
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
            <section className="informacion-aboutus">
                <Arquetipos nombre= "Misión" caracteristicas="Diseñamos juegos educativos de alta calidad y experiencias de aprendizaje interactivas que facilitan la comprensión y aplicación de los principios y prácticas de la gestión de proyectos con un enfoque basado en la metodología PMBOK."/>
                <Arquetipos nombre= "Visión" caracteristicas=" Nos esforzamos por convertirnos en líderes reconocidos en la industria de la educación de gestión de proyectos al proporcionar soluciones lúdicas innovadoras y efectivas para el aprendizaje de la dirección de proyectos en la universidad UTEC y más allá."/>
                <Arquetipos nombre= "Valores" caracteristicas="Innovacion, integridad y trabajo en equipo."/>
            </section>
            <Footer/>
        </>
    )
}

export default AboutUs;