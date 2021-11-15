import React, { useState } from "react"
import "./Header.css";
import Menuh from "./Menuh"
import Botonmenu from "./MenuButton";

function Header() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  }
  return (
    <div>
      <Menuh open={open} />
      <Botonmenu onClick={handleClick} />
    </div>
  );
}
  export default Header;
