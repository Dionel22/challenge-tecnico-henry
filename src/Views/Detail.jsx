import React, { useEffect } from 'react'
import style from './Detail.module.css'
import { idForms } from '../Redux/action'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

export default function Detail() {
    const {id} = useParams();
    const detailForm = useSelector((state)=>state.idForms)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(idForms(id))
    },[dispatch, id])

  return (
    <div className={style.divs}>
        <Link to={`/editForm/${id}`} className={style.link}>
        editar
        </Link>
        <h2>Nombre: {detailForm?.name}</h2>
        <h2>Telefono: {detailForm?.phone}</h2>
        <h2>Fecha de Inicio: {detailForm?.startDate}</h2>
        <h2>Lenguaje: {detailForm?.preferredLanguage}</h2>
        <h2>Nos Encontraste: {detailForm?.howFound}</h2>
    </div>
  )
}
