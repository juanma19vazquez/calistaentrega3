import React from "react"
import "./Chalequito.css";
import Chaleco1 from "./Assets/Imagenes/Productos/Chaleco 1.png";
import Chaleco2 from "./Assets/Imagenes/Productos/Chaleco 2.png";
import Chaleco3 from "./Assets/Imagenes/Productos/Chaleco 3.png";
import Tabla from "./Assets/Imagenes/Productos/Tabla de talles.PNG";

const Chalequito= () => {
    return (
<div className="gridc">
<h1 class="Titulo"> Chalequitos</h1>
    <div class="foto"><img src={Chaleco1} class="fotoprincipal" alt="Chaleco1"></img></div>
    <div class="foto1"><img src={Chaleco2} class="fotoschiquitas" alt="Chaleco2"></img></div>
    <div class="foto2"><img src={Chaleco3} class="fotoschiquitas" alt="Chaleco3"></img></div>
    <div class="foto3"><img src={Chaleco1} class="fotoschiquitas" alt="Chaleco1"></img></div>
    <div class="calculadora"><img src={Tabla} class="fotoscalculadora" alt="Calculadora"></img></div>
    <div class="info1"> Talle
    <select name="talle" id="talle">
      <option value="" disabled selected>Seleccionar Talle</option>
      <option value="talles">S</option>
      <option value="tallel">L</option>
      <option value="tallexl">XL</option>
      <option value="talle2xl">2XL</option>
      </select></div>
    <div class="info2">$ 450</div>
    <div class="boton"><button id="boton-comprar">COMPRAR</button></div>
</div>
)
}

export default Chalequito;