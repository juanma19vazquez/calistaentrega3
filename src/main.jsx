import React from "react"
import "./Header.css";
import Logo from "./Assets/Imagenes/LOGO CALISTA.png";
import PerroInicio from "./Assets/Imagenes/Perro Inicio.png";
import GatoInicio from "./Assets/Imagenes/Gato Inicio.png";
import Adidog from "./Assets/Imagenes/Productos/Adidog.png";
import platoscomida from "./Assets/Imagenes/Productos/platos comida.png";
import Chupetes from "./Assets/Imagenes/Productos/Chupetes.png";
import Berlin from "./Assets/Imagenes/Productos/buzo berlin.png";
import Chaleco3 from "./Assets/Imagenes/Productos/Chaleco 3.png";
const main= () => {
    return (
<div>
<main class="grid">
    <div class="div2">
      <img
        src={Logo}
        class="logocalista"
        alt="logocalista"
      />
    </div>
    <div class="div3">
      <img
        src={PerroInicio}
        class="perro"
        alt="Perro Inicio"
      />
    </div>
    <div class="div3-1">Perros</div>
    <div class="div4">
      <img
         src={GatoInicio}
        class="gato"
        alt="Gato inicio"
      />
    </div>
    <div class="div4-1">Gatos</div>
    <div class="div5">Novedades</div>
    <div id="nuevoslider">Acá va el segundo slider</div>
    <div class="div5-1">
            <img class="imgprod" src={Adidog} alt="adidog"></img>
          
      <img class="imgprod"  src={platoscomida} alt="platos"></img>

      <img class="imgprod"  src={Chupetes} alt="chupetes"></img>
      <p>Adidog</p>
      <p>Platos de Comida</p>
      <p>Chupetes</p>
    </div>
    <div class="div6">Más Comprados</div>
    <div class="div6-1">

      <img class="imgprod" src={Berlin} alt="buzo"></img>
          
      <a href="/Chalequito"><img class="imgprod"  src={Chaleco3} alt="chalequito"></img></a>

      <img class="imgprod"  src={Adidog} alt="Adidog"></img>
      <p>Buzo Berlin</p>
      <p>Chalequito</p>
      <p>Adidog</p>
    </div>
</main>
</div>
)
}

export default main;
