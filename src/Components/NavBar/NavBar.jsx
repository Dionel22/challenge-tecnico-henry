import React from "react";
import style from "./NavBar.module.css";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const local = useLocation()
  
  return (
    <div className={style.nav}>
      <Link to="/">
        <button className={local.pathname === "/"? style.true: style.false}>Inicio</button>
      </Link>
      <Link to="/form">
        <button className={local.pathname === "/form"? style.true: style.false}>Formulario</button>
      </Link>
    </div>
  );
}
