import React from "react";
import Menu from "./menu";
import AboutUs from "./aboututs";
import Equipo from "./equipo"
import UseStory from "./usestory";
import Contacto from "./contacto";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Jugar from "./jugar";

const Router = () => {
    return(
        <div className="paquete">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Menu/>}/>
                    <Route path="/aboutus" element={<AboutUs/>}/>
                    <Route path="/equipo" element={<Equipo/>}/>
                    <Route path="/usestory" element={<UseStory/>}/>
                    <Route path="/contacto" element={<Contacto/>}/>
                    <Route path="/jugar" element={<Jugar/>}/>

                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router;