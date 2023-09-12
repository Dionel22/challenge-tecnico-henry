import React, { useState } from "react";
import data from "../../data";
import style from "./Form.module.css";
import { useDispatch } from "react-redux";
import { postForms } from "../../Redux/action";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    startDate: "",
    preferredLanguage: "",
    howFound: "",
    newsletterSubscription: false,
  });

  const handleForm = (event) => {
    const { name, value } = event.target;
    console.log("name",name);
    console.log("value",value);
    if (name === "newsletterSubscription") {
      setForm({
        ...form,
        [name]: !form.newsletterSubscription,
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };
  //console.log("form",form);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Se a enviado tu encuesta con exitos.")
    localStorage.setItem("form", true);
    dispatch(postForms(form));
    setForm({
      name: "",
      phone: "",
      startDate: "",
      preferredLanguage: "",
      howFound: "",
      newsletterSubscription: false,
    })
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={style.contenedor}>
        <h2 className={style.h2}>Formulario</h2>
        {data?.items.map((e, i) => (
          <div key={i} className={style.item}>
            {/*Nombre*/}
            {e.type === "text" ? (
              <div className={style.name}>
                <label>{e.label}</label>
                <input 
                type="text" 
                name="name" 
                value={form.name}
                placeholder="Nombre Completo"
                onChange={handleForm} />
              </div>
            ) : null}

            {/*Número de teléfono*/}
            {e.type === "tel" ? (
              <div className={style.phone}>
                <label>{e.label}</label>
                <input 
                type="number" 
                name="phone" 
                value={form.phone}
                onChange={handleForm} />
              </div>
            ) : null}

            {/*Fecha de inicio*/}
            {e.type === "date" ? (
              <div className={style.date}>
                <label>{e.label}</label>
                <input 
                type="date" 
                name="startDate" 
                value={form.startDate}
                onChange={handleForm} />
              </div>
            ) : null}

            {/*¿Cuál es tu idioma preferido?*/}
            {e.type === "select" ? (
              <div className={style.preferredLanguage}>
                <label>{e.label}</label>
                <select value={form.preferredLanguage} name="preferredLanguage" onChange={handleForm}>
                  <option value="" >Elije un lenguaje</option>
                  {e.options.map((o, i) => (
                    <option key={i} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>
            ) : null}

            {/*¿Cómo nos encontraste?*/}
            {e.type === "radio" ? (
              <div className={style.howFound}>
                <label>{e.label}</label>
                {e.options.map((r, i) => (
                  <div key={i}>
                    <label>{r.label}</label>
                    <input
                      type="radio"
                      value={r.value}
                      name="howFound"
                      checked={form.howFound.includes(r.value)}
                      onChange={handleForm}
                    />
                  </div>
                ))}
              </div>
            ) : null}

            {/*¿Desea recibir nuestro boletín informativo?*/}
            {e.type === "checkbox" ? (
              <div className={style.newsletterSubscription}>
                <label>{e.label}</label>
                <input
                  type="checkbox"
                  name="newsletterSubscription"
                  checked={form.newsletterSubscription? true: false}
                  onChange={handleForm}
                />
              </div>
            ) : null}

            {/*Boton*/}
            {e.type === "submit" ? (
              <button type="submit" className={style.boton}>
                {e.label}
              </button>
            ) : null}
          </div>
        ))}
      </div>
    </form>
  );
}
