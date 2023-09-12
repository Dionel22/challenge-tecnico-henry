import React, { useEffect, useState } from "react";
import data from "../data";
import style from "./Form.module.css";
import { useDispatch } from "react-redux";
import { postForms } from "../Redux/action";

export default function Form() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    phone: 0,
    startDate: "",
    preferredLanguage: "",
    howFound: "",
    newsletterSubscription: false
  });

  useEffect(()=>{
  
  },[])

  const handleForm = (event) => {
    const { name, value } = event.target;
    console.log("name",name);
    console.log("value",value);
    if(name === "newsletterSubscription"){
      setForm({
        ...form,
        [name]: !form.newsletterSubscription,
      });
    }
    else{
      setForm({
      ...form,
      [name]: value,
    });
    }
  };
  console.log("form",form);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postForms(form))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={style.contenedor}>
        <h2>Formulario</h2>
        {data?.items.map((e, i) => (
          <div key={i} className={style.item}>

              {/*Nombre*/}
              {e.type === "text" ? (
                <div className={style.name}>
                  <label>{e.label}</label>
                  <input type="text" name="name" onChange={handleForm} />
                </div>
              ) : null}

              {/*Número de teléfono*/}
              {e.type === "tel" ? (
                <div className={style.phone}>
                  <label>{e.label}</label>
                  <input 
                  type="number" 
                  name="phone" 
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
                  onChange={handleForm} />
                </div>
              ) : null}

              {/*¿Cuál es tu idioma preferido?*/}
              {e.type === "select" ? (
                <div className={style.preferredLanguage}>
                  <label>{e.label}</label>
                  <select name="preferredLanguage" onChange={handleForm}>
                    <option>elije un lenguaje</option>
                    {e.options.map((o, i) => (
                      <option 
                      key={i} 
                      onChange={handleForm} 
                      value={o.value}>
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
                    onChange={handleForm}
                  />
                </div>
              ) : null}

              {/*Boton*/}
              {e.type === "submit" ? (
                <button type="submit" className={style.boton}>{e.label}</button>
              ) : null}
            
          </div>
        ))}
      </div>
    </form>
  );
}
