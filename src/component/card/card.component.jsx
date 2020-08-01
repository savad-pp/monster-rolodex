import React from 'react'
import './card.style.css'

export const Card = props=>(
    <div className="card-container">
        <img src={`https://robohash.org/${props.monsters.id}?set=set2&size=180x180`} alt=""/>
        <h2>{props.monsters.name}</h2>
        <p>{props.monsters.email}</p>
    </div>
)