import React,{useState} from "react";
import NavBar from "./navbar";
import '../styles/contacto.css'
import Footer from "./footer";
const Contacto = () =>{
    
    const[nombre,setNombre] = useState("");
    const[correo,setCorreo] = useState("");
    const[mensaje,setMensaje] = useState("");

    const handleSubmit = (event) =>{
        event.preventDefault();
        
        const datosFormulario = {
            nombre : nombre,
            correo : correo,
            mensaje : mensaje
        }
        console.log(datosFormulario);
    }

    return(
        <>
            <section className="contenedor-principal">
                <img className="contacto-imagen-1" src={require('../img/contactenos.jpg')} alt="imagen-1"/> 
                <NavBar/>
                <h3>Contacto</h3>
            </section>
            <section className="contenedor-secundario-1">
                <form className="forms" onSubmit={handleSubmit}>
                    <p>Solicita más información</p>
                    <input type="text" id="nombre" placeholder="Ingrese su nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}required/>
                    <input type="email" id="correo" placeholder="Ingrese su correo" value={correo} onChange={(e) => setCorreo(e.target.value)}required/>
                    <input type="mensaje" id="mensaje" placeholder="Ingrese mensaje" value={mensaje} onChange={(e) => setMensaje(e.target.value)}required/>
                    <button type="submit">Enviar</button>
                </form>
                <section className="medios-comunicacion">
                    Nuestros medios de comunicacion:
                    <div className="medios-de-comunicacion-2">
                        <p>Correos</p>
                        <p>carlos.claros@utec.edu.pe</p>
                        <p>juan.laredo@utec.edu.pe</p>
                        <p id="">Telefonos</p>
                        <p>(01)991174346</p>
                    </div>
                </section>
            </section>    
            <Footer/>
        </>
    )
}

export default Contacto;