import React from 'react'
import { Cardc } from "./Cardc";
import au from "./image/audi.png"
import bz from "./image/benz.jpg"
import bm from "./image/bmw.jpg"
import lam from "./image/lamborgini.jpg"
import por from "./image/porsche.jpg"
import vol from "./image/volkswagen.jpg"
export const Profilep = () => {
  return (
    <div>
      <div className='heading'>
        <h1>LOGO</h1>
      </div>
      <div className='sub'>
        <Cardc img={au} name={"audi"} nationality={"germany"}></Cardc>
        <Cardc img={bz} name={"benz"} nationality={"germany"}></Cardc>
        <Cardc img={bm} name={"bmw"} nationality={"germany"}></Cardc>
        <Cardc img={lam} name={"lamborgini"} nationality={"italy"}></Cardc>
        <Cardc img={por} name={"porsch"} nationality={"germany"}></Cardc>
        <Cardc img={vol} name={"volswagen"} nationality={"germany"}></Cardc>
      </div>
    </div>
  )
}
