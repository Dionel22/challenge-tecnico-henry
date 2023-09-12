import React from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card({ id, name, startDate }) {
  return (
    <Link to={`editForm/${id}`} className={style.link}>
      <div className={style.div}>
        <h4>{name}</h4>
        <h5>{startDate}</h5>
      </div>
    </Link>
  );
}