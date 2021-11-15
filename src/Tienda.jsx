import React from "react";
import Item from "./Articulo.jsx";
import { Productos } from "./Productos.js";
import "./Articulo.css";

const Tienda = () => {
  return (
    <main>
      <h1>Tienda</h1><br />
        {Productos.map((articulo) => {
            return (
              <Item
                id={articulo.id}
                nombre={articulo.nombre}
                precio={articulo.precio}
                imagen={articulo.imagen}
              />
            );
          })}

    </main>
  );
};

export default Tienda;