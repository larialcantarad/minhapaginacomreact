import './header.css'
// import { Link, NavLink } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";






// import { Link } from 'react-router-dom'

function header(){
    return (
        <>
        
        {/* <h2 className="ofertas">Ofertas em dezembro</h2> */}
       <nav className = "meuNavbar">
        <h2 className="nomedosite">Larissa.dev</h2>
        {/* esse link que esta ferrando, faz ficar em tela branca */}
        {/* <Link to ="/">home</Link> */}
        {/* mas a tag a também não esta funcionando */}
        {/* <BrowserRouter>
          <Routes>
               <Route path = "/" element = {<a href="../Pages/Sobre" target = "_blank">Sobre</a>}></Route>
          </Routes>
        
        </BrowserRouter> */}
        <a href='../Pages/Home' target = "_blank">Home</a>
        <a href="../Pages/Sobre" target = "_blank">Sobre</a>
        <a href="../Pages/Projetos" target = "_blank">Projetos</a>
        <a href='../Pages/Contato' target = "_blank">Contato</a>
       </nav> 
        {/* <nav>
            <Link to="/feminino">Feminino</Link>
            <Link to="/masculino">Masculino</Link>
            <Link to="/infantil">Infantil</Link>
            <Link to="/sale">Sale</Link>
        </nav>
         */}
        {/* <div>
            <Carrossel></Carrossel>
        </div>
        */}
        
        
        </>
    )
}

export default header