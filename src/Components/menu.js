import React from "react";
import {useNavigate} from 'react-router-dom';
import NavBar from "./navbar";
import Footer from "./footer";
import Apartado from "./apartados";
import '../styles/menu.css'
const Menu = () =>{
    const navigate = useNavigate();


    return(
        <>
           <section className="container-1">
                <img className="imagen-1" src={require("../img/imagen1.jpg")}></img>
                <NavBar/>        
                <div className="texto-1">
                    <h2>PM GAME</h2>
                    <h3>Una manera interactiva de aprender</h3>
                </div>
            </section>
            <Apartado nombre="Nosotros" 
            descripcion="Conoce los valores y virtudes que nos representan como entidad"
            imagen = "conocenos"
            link = "aboutus"
            />
            <Apartado nombre="Equipo" 
            descripcion="A falta de confianza... conocimiento! Conocemos un poco más a los creadores de esta actividad"
            imagen = "virtudes"
            link="equipo"
            />
            <Apartado nombre="Use story" 
            descripcion="Conoce todos los detalles de como jugar y todas las piezas y cartas involucradas!"
            imagen = "tablero"
            link = "usestory"
            />
            <Apartado nombre="Contacto" 
            descripcion="Si tienes alguna duda o consulta, no dudes en escribirnos!"
            imagen = "contacto"
            link="contacto"
            />
            <Footer/>
        </>
    )
}

export default Menu;