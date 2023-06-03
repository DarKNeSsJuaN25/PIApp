import React from "react";
import Footer from "./footer";
import NavBar from "./navbar";
import { useState } from "react";
import '../styles/jugar.css'
import Carta from "./cartas";

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

    return(
        <>
            <NavBar/>
            <section className="jugar-contenedor-1">
                <section className="registro">
                    <h2>Cartas agregadas</h2>
                    {
                        Object.keys(diccionario).map(dicc =>
                            <Carta 
                                key = {dicc}
                                id = {dicc}
                                nombre = {dicc}
                                presupuesto = {diccionario[dicc].presupuesto}
                                desarrollo = {diccionario[dicc].desarrollo}
                            />
                        )
                    }
                </section>
                <section className="input">
                    <div className="input-1">
                        <input placeholder="Ingrese el codigo de la carta" type='text' value={input} onChange={changeInput}></input>
                        <button placeholder="Enviar" onClick={enviarCodigo} >Enviar</button>
                    </div>
                    <span className="span">{mensaje}</span>
                    <div className="acumulacion">
                        Presupuesto actual: {presupuesto}
                    </div>
                </section>
            </section>
            <Footer/>
        </>
    )   
}

export default Jugar;