import React from "react";
import "./Articulo.css";

const Item = ({nombre,precio, imagen }) => {
  const Signoprecio = `$ ${precio} `;

  return (
    <span className="articulos"><a className="linktienda" href={nombre}>
        <img className="imagen" width="250vw" height="280vh" src={imagen} />
        <p className="pnombre">
              {nombre}
          </p>
        <p className="pprecio">
              {Signoprecio}
            </p>
            </a>
    </span>
  );
};

export default Item;
