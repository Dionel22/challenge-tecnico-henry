import React from 'react'
import Card from '../Card/Card'
import style from './Cards.module.css'

export default function Cards({allForm}) {
  return (
    <div className={style.cards}>
        {allForm?.map((e)=> <Card key={e.id} id={e.id} name={e.name} startDate={e?.startDate} />)}
    </div>
  )
}
