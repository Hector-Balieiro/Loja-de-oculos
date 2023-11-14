import './style.css';

function Sobre(){
  return(
   <section className="container-fluid blue lighten-5" id="sobre">
     <div className="texto col-md-7 col-11 mx-auto text-center pt-5 mb-5">
       <h3>QUEM SOMOS NÓS?</h3>
       <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo. </p>
     </div>

      <div className="cartao-master container-lg container-fluid fw-bold">
        <div className="row  row-cols-1 row-cols-sm-2 mx-auto" id="vaca">
          
        <div className="cartao col border  text-center p-0 minHeight">
          <img src ="public/imagens/loja.png" className="w-100 h-100"></img>
        </div>
          
        
        <div className="cartao col border  text-center bg-light minHeight">
          <h1 className="mb-5 pt-4 m-auto">Nossas Filiais</h1>
          <p className="fs-4 fw-lighter d-flex">Hoje temos mais de 20 filiais pelo Brasil e na América</p>
        </div>

          
          
        <div className="cartao col border  text-center bg-light minHeight">
          <h2 className="m-auto pt-4 w-75">Atendimento flexível</h2>
          <p className="fs-4 fw-lighter mt-5">Nossa equipe possui é treinada para te atender</p>
        </div>
          
        <div className="cartao col border  text-center p-0 minHeight">
          <img src="public/imagens/atendimento.png"className="w-100 h-100"></img>
        </div>
          
        </div>
        </div>
     
   </section> 
  )
}

export default Sobre;