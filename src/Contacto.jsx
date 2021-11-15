import React from "react"
import "./Contacto.css";
import Pickup from "./Assets/Imagenes/Logos/pickup.png";
import Camion2 from "./Assets/Imagenes/Logos/logo camion2.png";
import MercadoPago from "./Assets/Imagenes/Logos/mercado-pago.jpg";
import Instagram from "./Assets/Imagenes/Logos/instagram2.png"
import Abitab from "./Assets/Imagenes/Logos/Abitab.png";
import Facebook from "./Assets/Imagenes/Logos/facebook.png";
import BROU from "./Assets/Imagenes/Logos/BROU.jfif";
import WhatsappL from "./Assets/Imagenes/Icono whatsapp.png";
import Santander from "./Assets/Imagenes/Logos/santander.png";

const Contacto= () => {
    return (
<div className="gridco">
    <h1>Contacto y medios de pago</h1>
    <div className="contacto"><a href="https://goo.gl/maps/CbE8wEWjLyHoXbTs6"><img src={Pickup} className="logos2" alt="logo pickup"></img></a> Pickup Prado</div>
    <div className="medios">Medios de Pago Aceptados:</div>
    <div className="contacto" id="Domicilio"><img src={Camion2} className="logos2" alt="logo camion"></img> A domicilio</div>
    <div className="logos"><img src={MercadoPago} className="logos1" alt="logo mercado pago"></img></div>
    <div className="contacto"><a href="https://www.instagram.com/calista.petshop/"><img src={Instagram} className="logos2" alt="logo instagram"></img></a><p class="pcontacto">calista.petshop</p></div>
    <div className="logos"><img src={Abitab} className="logos1" alt="Abitab"></img></div>
    <div className="contacto"><a href="https://www.facebook.com/Calista-PetShop-104008015147289"><img src={Facebook} className="logos2" alt="logo facebook"></img></a> <p className="pcontacto">Calista PetShop</p></div>
    <div className="logos"><img src={BROU} className="logos1"alt="BROU"></img></div>
    <div className="contacto"><a href="https://api.whatsapp.com/send/?phone=59891920170&text=Hola!,quisiera+consultar+por+el+siguiente+producto:" target="_blank"><img src={WhatsappL} className="logos2" alt="logo whatsapp"></img></a><p className="pcontacto"> 091920170</p></div>
    <div className="logos"><img src={Santander} className="logos1"  alt="SANTANDER"></img></div>
</div>
)
}

export default Contacto;