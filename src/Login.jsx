import React from "react"
import "./Login.css";
import FotoCalista from "./Assets/Imagenes/LOGO CALISTA.png";

const Login= () => {
    return (
    <main class="gridl">
    <div class="div2"> <img src={FotoCalista}
        className="logocalista" alt="logocalista"></img></div>

    <div class="form">
      <form action="http://localhost:3000/login" method="POST" class="gridform">
        <label for="Correo">Correo</label>
        <input type="email" name="correo" required placeholder="yyyy@hotmail.com"id="correo"></input><br></br>
        <label for="Password">Contraseña</label>
        <input type="password" name="password" id="password" required maxlength="12" minlength="6"></input><br></br>
        <button class="enviar">Iniciar Sesión</button><br></br>
        <a href="/nodesarrollada" class="links">Olvide mi contraseña</a><br></br>
        <a href="/signup1" class="links">¿No tienes usuario? Registrate</a>
        </form>
    </div>
    <br></br>
    <br></br>
</main>
)
}

export default Login;
