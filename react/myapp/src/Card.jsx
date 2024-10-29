import React from 'react'
import au from "./image/audi.png"
import bz from "./image/benz.jpg"
import bm from "./image/bmw.jpg"
import lam from "./image/lamborgini.jpg"
import por from "./image/porsche.jpg"
import vol from "./image/volkswagen.jpg"
import "./Media.css";
export const Card = () => {
    return (
        <div>
            <div className="text-center mb-4">
                <h1>Car Brands</h1>
            </div>

            <div className="container">
                <div className="row">
                   
                    <div className="col-md-4 col-sm-md-8 text-center mb-3">
                        <img src={bm} className="img-fluid"  />
                        <h2>BMW</h2>
                        <h3><a href="https://www.bmw.in/en/index.html">Visit</a></h3>
                    </div>

                    <div className="col-md-4 col-sm-md-8 text-center mb-3">
                        <img src={bz} className="img-fluid"  />
                        <h2>Mercedes-Benz</h2>
                        <h3><a href="https://www.mercedes-benz.co.in/?gad_source=1&gclid=Cj0KCQjwjY64BhCaARIsAIfc7YYLHACTsQe3eprQQqA2gH-ufdcE6Ey5iYqcMRvfQ3Rq2ngKSEURPd8aAn66EALw_wcB&gclsrc=aw.ds">Visit</a></h3>
                    </div>

                    <div className="col-md-4 col-sm-md-8 text-center mb-3">
                        <img src={au} className="img-fluid"/>
                        <h2>Audi</h2>
                        <h3><a href="https://www.audi.in/in/web/en.html">Visit</a></h3>
                    </div>

                    <div className="col-md-4 col-sm-md-8 text-center mb-3">
                        <img src={por} className="img-fluid" />
                        <h2>Porsche</h2>
                        <h3><a href="https://www.porsche.com/middle-east/_india_/">Visit</a></h3>
                    </div>

                    <div className="col-md-4 col-sm-md-8 text-center mb-3">
                        <img src={vol}className="img-fluid"/>
                        <h2>Volkswagen</h2>
                        <h3><a href="https://www.volkswagen.co.in/en.html">Visit</a></h3>
                    </div>

                    <div className="col-md-4 col-sm-md-8 text-center mb-3">
                        <img src={lam} className="img-fluid"  />
                        <h2>Lamborghini</h2>
                        <h3><a href="https://www.lamborghini.com/en-en">Visit</a></h3>
                    </div>
                </div>
            </div>
        </div>
    )
}


