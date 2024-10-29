import React from 'react'
import mac from "./image/IMG_1134.jpeg"
import mac2 from "./image/mac2.jpg"
export const Mac = () => {
    return (
    <div>
        <div className='row1  d-flex justify-content-center pb-5'style={{ backgroundColor: '#003f9e' }}>
            <div className='ms-5 ps-5  col mb-2'>
                <div className='text' >
                    <div className='fw-bold text-white fs-1 pt-5  mt-5 ms-5'>
                        REALLY CATCHY HEADLINE HERE
                    </div>
                    <p className='ms-5 text-white fs-5 w-15 mt-4 '> Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br></br> Excepturi eaque maxime similique ullam vel quasi exercitationem.</p>

                </div>

                <div className='btn d-flex ms-5  mt-5'>
                    <div className='button1'>
                        <button type="button" class="btn  btn-primary box-button bg-light text-primary  ps-4 pe-4 pt-2 pb-2 fw-bold"style={{ color: '#003f9e' }} >Get started</button>
                    </div>
                    <div className='button2'>
                        <button type="button" class=" btn btn-primary box-button btn-outline-light ms-5 ps-4 pe-4 pt-2 pb-2 fw-bold" style={{ backgroundColor: '#003f9e' }}>Learn more</button>
                    </div>
                </div>  
            </div>
            <div className='image mt-5 mb-5 pt-5 pb-5 me-5 col mb-2'>
                <img src={mac} className="img-fluid rounded float-start" style={{ height: '400px', width: '700px' }} />
            </div>
        </div>
        <div className='row d-flex justify-content-center align-items-center pt-5 mt-5 pb-5 mb-5 ms-5 me-5'>
    <div className='col-12 col-md-4 text-center pt-5 mt-5 pb-5 mb-5 w-25 '>
        <img src={mac2} className="img-fluid rounded mb-5" style={{ height: '100px', width: '100px' }}/>
        <h1>Feature Name</h1>
        <p className='mt-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo officiis suscipit impedit assumenda molestiae consequuntur quas possimus. Assumenda, laudantium mollitia quasi maxime deleniti.</p>
    </div>
    <div className='col-12 col-md-4 text-center  mt-4 pb-5 mb-5 w-25'>
        <img src={mac2} className="img-fluid rounded mb-5" style={{ height: '100px', width: '100px' }} />
        <h1>Feature Name</h1>
        <p  className='mt-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
    </div>
    <div className='col-12 col-md-4 text-center  pt-5 mt-5 pb-5 mb-5 w-25'>
        <img src={mac2} className="img-fluid rounded mb-5" style={{ height: '100px', width: '100px' }}  />
        <h1>Feature Name</h1>
        <p  className='mt-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo officiis suscipit impedit assumenda molestiae consequuntur quas possimus. Assumenda, laudantium mollitia quasi maxime deleniti.</p>
    </div>
</div>

    </div>
    )
}
