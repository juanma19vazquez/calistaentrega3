import React from "react"
import "./Header.css";
import LogoJM from "./Assets/Imagenes/LOGOJM.png"
const Footer= () => {
    return (
    <div>
<footer>
            <p id="desarrollador">Copyright© Desarrollo por Juanma Vazquez</p>
                <img src={LogoJM} className="logoJM"
        alt="logo JM"></img>

      <ul>
        <li><a href="https://www.instagram.com/calista.petshop/"><i class="fab fa-2x fa-instagram-square"></i></a></li>
        <li><a href="https://www.facebook.com/Calista-PetShop-104008015147289"><i class="fab fa-2x fa-facebook-square" ></i></a></li>
        </ul>
  <script src="inicio.js"></script>
 </footer>
    </div>
)
}

export default Footer;
