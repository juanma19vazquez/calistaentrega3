import React from "react"
import "./Header.css";

function Menuh({ open }) {
    const display = open ? `grid` : `none`;
    console.log("DISPLAY", display);
    return (
        <nav id="menu" style={{display}}>
            <ul className="menu" open={open}>
                <li className="botones">
                    <a href="/main">Inicio</a>
                </li>
                <li className="botones">
                    <a href="/Tienda">Tienda</a>
                </li>

                <li className="botones">
                    <a href="/Nodesarrollada">Juguetes</a>
                </li>
                <li className="botones">
                    <a href="Nodesarrollada">Otros Accesorios</a>
                </li>
                <li className="botones">
                    <a href="./Contacto">Contacto / Medios de Pago</a>
                </li>
                                <li className="botones">
                    <a href="/Login">Login / Signup</a>
                </li>
            </ul>
        </nav>
    );
}
export default Menuh;
