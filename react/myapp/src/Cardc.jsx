import React from 'react'
import "./Cardc.css"
export const Cardc = (props) => {
  return (
    <div className="main">
      <h1>{props.name}</h1>
      <img src={props.img}></img>
      <h2>{props.nationality}</h2>

    </div>
  )
}
