import React from "react"
import "./Header.css";
import iconow from "./Assets/Imagenes/Icono whatsapp.png";
const Iconowapp = () => {
    return (
    <div>
    <a
      href="https://api.whatsapp.com/send/?phone=59891920170&text=Hola!,quisiera+consultar+por+el+siguiente+producto:"
      target="_blank"
    >
      <img
        src={iconow}
        className="claseiconowa"
        alt="icono whatsapp"
      />
    </a>
    </div>
)
}

export default Iconowapp;
