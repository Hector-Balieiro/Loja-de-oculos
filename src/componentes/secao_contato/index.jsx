import React from 'react'
import './style.css'


function Contato(){
  return (
    <section className="mt-5 container-fluid preto_azul text-light  pt-5" id="contato">
    <div className="titulo w-100 text-center lh-lg px-4">
      <h2>Fale Conosco</h2>
      <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
    </div>


        <div className="pai container d-flex justify-content-center flex-sm-row flex-column mx-auto mt-5 pb-5">
          <div className="me-5" id="contact">
            <h4 className="text-sm-start text-center">Contato</h4>
            <p className="fw-lighter text-sm-start text-center mw-2 "><i className="bi bi-geo-alt me-2"></i>Nova Iguaçu, RJ</p>
            <p className="fw-lighter text-sm-start text-center mw-2 "><i className="bi bi-telephone me-2"></i>(21) 9999-9999</p>
            <p className="fw-lighter text-sm-start text-center mw-2 "><i className="bi bi-envelope me-2"></i>contato@oticavida.com</p>
          </div>

          <div className="mw-5 mt-sm-0 mt-5">
            <h4 className="text-sm-start text-center">Nossas redes sociais</h4>
            <p className="fw-lighter text-sm-start text-center "><i className="bi bi-facebook me-3"></i>/OticaVida</p>
            <p className="fw-lighter text-sm-start text-center "><i className="bi bi-instagram me-2"></i>@oticavidarj</p>
            <p className="fw-lighter text-sm-start text-center "><i className="bi bi-twitter me-2"></i>@oticavidarj</p>
          </div>
          
          </div>
  </section>
  );
}

export default Contato;