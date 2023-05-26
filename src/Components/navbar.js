import React from "react";
//import { useState } from "react";
import {Link} from "react-router-dom";
import '../styles/navbar.css'
const NavBar = () =>{
    const closeMenu = () => !closeMenu
    return(
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to='/' onClick = {closeMenu}>Inicio</Link>
                    <Link to='/aboutus' onClick = {closeMenu}>About Us</Link>
                    <Link to='/equipo' onClick = {closeMenu}>Equipo</Link>
                    <Link to='/usestory' onClick = {closeMenu}>Use Story</Link>
                    <Link to='/contacto' onClick = {closeMenu}>Contacto</Link>
                </div>

            </nav>
        
        </>
    )
}
export default NavBar;