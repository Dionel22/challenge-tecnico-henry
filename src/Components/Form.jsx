import React, { useState } from "react";
import data from "../data";
import style from "./Form.modules.css";

export default function Form() {
  const [form, setForm] = useState({
    name: "",
    phone: 0,
    startDate: "",
    preferredLanguage: "",
    howFound: "",
    newsletterSubscription: "",
  });

  const handleForm = (event) => {
    const { name, value } = event.target;
    //console.log("name",name);
    //console.log("value",value);
    setForm({
      ...form,
      [name]: value,
    });
  };
  //console.log("form",form);

  return (
    <form>
      <div>
        {data?.items.map((e, i) => (
          <div key={i} className={style.contenedor}>
            <label>{e.label}</label>

            {/*Nombre*/}
            {e.type === "text" ? (
              <input type="text" name="name" onChange={handleForm} />
            ) : null}

            {/*Número de teléfono*/}
            {e.type === "tel" ? (
              <input type="number" name="phone" onChange={handleForm} />
            ) : null}

            {/*Fecha de inicio*/}
            {e.type === "date" ? (
              <input type="date" name="startDate" onChange={handleForm} />
            ) : null}

            {/*¿Cuál es tu idioma preferido?*/}
            {e.type === "select" ? (
              <select name="preferredLanguage" onChange={handleForm}>
                {e.options.map((o, i) => (
                  <option key={i} onChange={handleForm} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            ) : null}

            {/*¿Cómo nos encontraste?*/}
            {e.type === "radio"
              ? e.options.map((r, i) => (
                  <div key={i}>
                    <label>{r.label}</label>
                    <input
                      type="radio"
                      value={r.value}
                      name="howFound"
                      onChange={handleForm}
                    />
                  </div>
                ))
              : null}

            {/*¿Desea recibir nuestro boletín informativo?*/}
            {e.type === "checkbox" ? (
              <input
                type="checkbox"
                name="newsletterSubscription"
                onChange={handleForm}
              />
            ) : null}

            {/*Boton*/}
            {e.type === "submit" ? (
              <button type="submit">{e.label}</button>
            ) : null}
          </div>
        ))}
      </div>
    </form>
  );
}
