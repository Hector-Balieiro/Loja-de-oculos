
import React from 'react'

function Header(){
  return(
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container">
            <div className="d-flex">
              <img src ="../../public/imagens/logo.png" height="55px" class='d-flex'></img>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse text-end flex-lg-grow-0" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-link" href="#produto">PRODUTOS</a>
                <a class="nav-link" href="#sobre">SOBRE</a>
                <a class="nav-link" href="#contato">CONTATO</a>
                
              </div>
            </div>
          </div>
        </nav>
    </header>
  )
}
export default Header;