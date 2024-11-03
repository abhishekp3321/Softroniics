import React from 'react'
// import './style.css';
export const Child = (props) => {
  return (
    <div class ="main">
        <div class="d1">
        <h2 classname="h1"> {props.name} </h2>
        <h2> {props.age} </h2>
        <div><img src={props.image}></img></div>
        </div>
    </div>
  )
}
