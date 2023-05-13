import React from "react";
//import { useState } from "react";
import {Link} from "react-router-dom";
const NavBar = () =>{
    const closeMenu = () => !closeMenu
    return(
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to='/' onClick = {closeMenu} />
                </div>
            </nav>
        
        </>
    )
}
export default NavBar;