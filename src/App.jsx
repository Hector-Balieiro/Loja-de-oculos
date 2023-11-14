import './App.css';
import 'materialize-css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './componentes/header';
import Banner from './componentes/secao_banner';
import Produto from './componentes/secao_produto';
import Sobre from './componentes/secao_sobre';
import Contato from './componentes/secao_contato';
import Rodape from './componentes/rodape';

export default function App() {
  return (
    <div>
        <Header/>
        <Banner/>
        <Produto/>
        <Sobre/>
        <Contato/>
        <Rodape/>
    </div>
  );
}
