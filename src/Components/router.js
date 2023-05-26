import React from "react";
import Menu from "./menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Menu/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router;