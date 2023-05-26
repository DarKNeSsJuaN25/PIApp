import React from "react";
import Footer from "./footer";
import NavBar from "./navbar";
import { useState } from "react";
import '../styles/jugar.css'
import {v4 as uuidv4} from 'uuid'
import Carta from "./cartas";

const Jugar = () => {
    const [mostrarSpan, setmostrarSpan] = useState(false)
    const lista = ['1a','2a','3a']
    const [cartas,setCartas] = useState([])
    const [input, setInput] = useState('')

    const changeInput = e => {
        setInput(e.target.value)
    }
    const enviarCodigo = e =>{
        if(lista.includes(input)){
            setmostrarSpan(false)
            const carta_final = {
                id: uuidv4(),
                nombre: input,
                foto: "Aun no hay xd"
            }
            console.log(carta_final)
            const cartas_usuario = [carta_final, ... cartas]
            setCartas(cartas_usuario)        
        }
        else{
            setmostrarSpan(true)
            console.log("Error")
        }
    }

    return(
        <>
            <NavBar/>
            <section className="jugar-contenedor-1">
                <section className="registro">
                    {
                        cartas.map((carta) =>
                            <Carta 
                                key = {carta.id}
                                id = {carta.id}
                                nombre = {carta.nombre}
                            />
                        )
                    }
                </section>
                <section className="input">
                    <div>
                    <input placeholder="Ingrese el codigo de la carta" type='text' value={input} onChange={changeInput}></input>
                    <button placeholder="Enviar" onClick={enviarCodigo} ></button>
                    </div>
                    {mostrarSpan && <span>Error! Codigo no existe</span>}
                </section>
            </section>
            <Footer/>
        </>
    )   
}

export default Jugar;