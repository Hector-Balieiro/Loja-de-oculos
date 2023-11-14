import React from 'react'
import './style.css'


function Banner(){
  return(
   <section className="container-fluid d-flex" id="banner">
     <div className=" container-lg container-fluid d-flex align-items-center"id="background">
       <div className="texto text-light opacity-100">
           <p className="fs-2 ">Preços baixos em</p>
           <h1 >ÓCULOS DE <br></br>
           GRAU E DE SOL
          </h1>
           <p className="fs-2 ">Você só encontra aqui</p>
       </div>
     </div>
   </section> 
  )
}

export default Banner;