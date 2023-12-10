import './header.css'
// import { Link, NavLink } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";






// import { Link } from 'react-router-dom'

function header(){
    return (
        <>
        
       
       <nav className = "meuNavbar">
        <h2 className="nomedosite">Larissa.dev</h2>
       
        <a href='../Pages/Home' target = "_blank">Home</a>
        <a href="../Pages/Sobre" target = "_blank">Sobre</a>
        <a href="../Pages/Projetos" target = "_blank">Projetos</a>
        <a href='../Pages/Contato' target = "_blank">Contato</a>
       </nav> 
        
        </>
    )
}

export default header
