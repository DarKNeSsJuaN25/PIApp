import React from "react";
import {useNavigate} from 'react-router-dom';
import '../styles/menu.css'
const Apartado = (props) =>{
    const navigate = useNavigate();
    const handleButtonClick = () =>{
        navigate(`/${props.link}`);
    }
    if(!props.header){
        return(
            <section className="nosotros">
                <p className="nosotros-titulo">{props.nombre}</p>
                <div className="nosotros-2">
                    <div className="nosotros-3">
                        <p>{props.descripcion}</p>
                        <button className="mas-informacion" onClick={handleButtonClick}>MAS INFORMACIÓN</button>
                    </div>
                    <img className="imagen-2" src={require(`../img/${props.imagen}.jpg`)} alt="imagen-2"></img>
                </div>
            </section>
        )
    }
    else{
        return(
           <section className="container-1">
                <img className="imagen-1" src={require("../img/imagen1.jpg")} alt="imagen-1"></img>
                <div className="texto-1">
                    <h2>PM GAME</h2>
                    <h3>Una manera interactiva de aprender</h3>
                    <button className="mas-informacion" onClick={handleButtonClick}>Jugar</button>
                </div>
            </section>
        )
    }
}
export default Apartado;