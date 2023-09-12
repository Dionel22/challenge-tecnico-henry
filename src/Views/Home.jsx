import React, { useEffect } from "react";
import Cards from "../Components/Cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import { getForms } from "../Redux/action";

export default function Home() {
  //console.log(data)
  const allForm = useSelector((state) => state.allForms);
  const dispatch = useDispatch()
  const form = localStorage.getItem("form") === "true";

  useEffect(()=>{
    dispatch(getForms())
  },[])

  return (
    <div>
      {form ?<Cards allForm={allForm} />: <h2>No tiene Formulario...</h2>}
    </div>
  );
}
