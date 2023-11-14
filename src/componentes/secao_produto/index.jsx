import React from 'react';
import './style.css';


function Produto(){
  return(

    <section className="my-5">
      <div className='texto lh-lg m-auto text-center mb-5'id="produto">
        <h2>NOSSOS PRODUTOS</h2>
        <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.
Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
      </div>

      <div className="cartao-master container fw-bold p-4 ">
        <div className="grid row gap-3 row-cols-sm-3 row-cols-1 justify-content-center">
          
        <div className="cartao col altura d-flex text-center grey lighten-3">
          <div className="align-self-center mx-auto my-0">
          <h5>Óculos de grau</h5>
          <img src = "../../public/imagens/oculos01.png" height="100%" width="65%"></img>
          <p>R$ 500,00</p>
          </div>
        </div>
          
        
        <div className="cartao col altura d-flex text-center grey lighten-3">
          <div className="align-self-center mx-auto my-0">
          <h5>Óculos transition</h5>
          <img src = "../../public/imagens/oculos02.png" height="100%" width="75%"></img>
          <p>R$ 750,00</p>
          </div>
        </div>

          
          
         <div className="cartao col altura d-flex text-center grey lighten-3">
          <div className="align-self-center mx-auto w-75">
          <h5>Óculos de sol</h5>
          <img src = "../../public/imagens/oculos03.png" height="100%" width="75%"></img>
          <p>R$ 700,00</p>
          </div>
        </div>
          
         <div className="cartao col altura d-flex text-center grey lighten-3">
          <div className="align-self-center mx-auto my-0">
          <h5>Óculos infantil</h5>
          <img src = "../../public/imagens/oculos04.png" height="100%" width="75%"></img>
          <p>R$ 500,00</p>
          </div>
        </div>
          
        </div>
      </div>

      <div className="lista d-flex justify-content-sm-center  container-fluid mt-4">
        <div className="d-flex flex-column text-sm-center text-start  w-100" id="bullets">
        <p className="mx-auto">Todos os nossos produtos incluem:</p>
        <ul  className=" pe-3">
          <li>Garantia de 1 ano</li>
          <li>Manutenção preventiva</li>
          <li>Descontos especiais na compra da segunda unidade</li>
          <li> Flexibilidade de pagamento</li>
        </ul>
          </div>
      </div>
      
      </section>
  )
}

export default Produto