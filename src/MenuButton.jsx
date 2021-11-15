import React from "react"
import botonmenu from "./Assets/Imagenes/Menu.png";
import "./Header.css";

function MenuButton(props) {

  /*const onClick = props.onClick;*/

  const { onClick } = props;

  return (
   <button id="botonmenu" onClick={onClick}>
    <img src={botonmenu} className="menuhamburguesa" height="100%" alt="botonmenu" />
  </button>
)
}

export default MenuButton;