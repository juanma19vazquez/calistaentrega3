import React, { useState } from "react";
import Axios from "axios";
import "./Signup.css";
import FotoCalista from "./Assets/Imagenes/LOGO CALISTA.png";

function Signupe() {
    const url = "http://localhost:2008/signup"
    const [data, setData] = useState({
        name: "",
        telefono: "",
        direccion: "",
        correo: "",
        password: "",

    })

    async function submit(e) {
        e.preventDefault();
        const res = await Axios.post(url, {
            name: data.name,
            telefono: data.telefono,
            direccion: data.direccion,
            correo: data.correo,
            password: data.password,
            
        })

    }
    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }

    return (
        <main className="grids">
        <div className="divf"></div>
        <div className="divf"></div>
        <div class="div2"> <img  src={FotoCalista} className="logocalista"  alt="logocalista"></img> </div>
        <div className="form">
            <form onSubmit={submit} className="gridform">
                <label for="Nombre">Nombre y Apellido</label>
                <input onChange={(e) => handle(e)} id="name" type="text" value={data.name} placeholder="Juan Perez" required></input>
                <label for="Telefono">Teléfono</label>
                <input onChange={(e) => handle(e)} id="telefono" type="tel" value={data.telefono} placeholder="09X XXX XXX" required></input>
                <label for="Direccion">Dirección</label>
                <input onChange={(e) => handle(e)} id="direccion" type="text" value={data.direccion} placeholder="Rivera 1234" required></input>
                <label for="Correo">Correo</label>
                <input onChange={(e) => handle(e)} id="correo" type="text" value={data.correo} placeholder="yyy@gmail.com" required></input>
                <label for="Password">Contraseña</label>
                <input onChange={(e) => handle(e)} id="password" type="password" value={data.password} required maxlength="12" minlength="6" placeholder="--------" required></input> <br />
                <a href="/Signupexitoso"><button class="enviar">Registrarse</button></a>
            <p>El registro se hizo correctamente</p>
            </form>
            </div>
        </main>
    )
}
    export default Signupe;