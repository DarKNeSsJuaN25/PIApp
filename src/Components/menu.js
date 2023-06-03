import React from "react";
import NavBar from "./navbar";
import Footer from "./footer";
import Apartado from "./apartados";
import '../styles/menu.css'
const Menu = () =>{
    return(
        <>
            <Apartado header={true} link="jugar"/>
            <NavBar/>        
            <Apartado nombre="Nosotros" 
            descripcion="Conoce los valores y virtudes que nos representan como entidad"
            imagen = "conocenos"
            link = "aboutus"
            header= {false}
            />
            <Apartado nombre="Equipo" 
            descripcion="A falta de confianza... conocimiento! Conocemos un poco más a los creadores de esta actividad"
            imagen = "virtudes"
            link="equipo"
            header= {false}
            />
            <Apartado nombre="Use story" 
            descripcion="Conoce todos los detalles de como jugar y todas las piezas y cartas involucradas!"
            imagen = "tablero"
            link = "usestory"
            header= {false}
            />
            <Apartado nombre="Contacto" 
            descripcion="Si tienes alguna duda o consulta, no dudes en escribirnos!"
            imagen = "contacto"
            link="contacto"
            header= {false}
            />
            <Footer/>
        </>
    )
}

export default Menu;