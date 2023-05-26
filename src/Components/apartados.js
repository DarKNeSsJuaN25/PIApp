import React from "react";
import {useNavigate} from 'react-router-dom';
import '../styles/menu.css'
const Apartado = (props) =>{
    const navigate = useNavigate();
    const handleButtonClick = () =>{
        navigate(`/${props.link}`);
    }
    
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
export default Apartado;