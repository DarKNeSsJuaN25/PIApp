import React from "react";
import Footer from "./footer";
import NavBar from "./navbar";
import { useState } from "react";
import Modales from "./modales";
import '../styles/jugar.css'
const Jugar = () => {
    const [mensaje,setMensaje] =  useState('')
    const d_default = {'1a':{presupuesto : 10, desarrollo : 20},'2a':{presupuesto : 12, desarrollo : 15}}
    const [diccionario,setdiccionario] = useState({})
    const [input, setInput] = useState('')
    const [presupuesto, setpresupuesto] = useState(50000)
    const changeInput = e => {
        setInput(e.target.value)
    }
    const enviarCodigo = e =>{
        if(d_default.hasOwnProperty(input) && !diccionario.hasOwnProperty(input)){
            const dic_final = Object.assign({}, diccionario, {[input]: d_default[input]})
            setdiccionario(dic_final)
            setMensaje("Agregado correctamente")
            setpresupuesto(presupuesto-d_default[input].presupuesto)
        }
        else if(diccionario.hasOwnProperty(input)){
            setMensaje("Ya fue agregado")
            console.log("Ya fue anidido")
        }
        else{
            setMensaje("Error: Codigo no valido")
            console.log("Error")
        }
    }
    const [openModal, setModal] = useState(false)
    const handleModal = () => setModal(!openModal)

    return(
        <>
                <section className="tablero">
                    <section className="navbar-1">
                            <div>Dinero: 1000</div>
                            <button className="comprar cartas" onClick={handleModal}>
                            Comprar cartas
                            </button>
                            <Modales
                                verificar={openModal}
                                cerrar = {handleModal}
                            ></Modales>
                            <button className="eventos-generales">
                                eventos
                            </button>
                            <button className="p">p</button>
                            <button className="contador-turnos">turno</button>
                    </section>
                    <section className="tablero-principal">
                        tablero
                    </section>
                </section>  
        </>
    )   
}

export default Jugar;