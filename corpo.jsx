// import Carrossel from './carrossel'
import 'bootstrap/dist/css/bootstrap.min.css'
import './corpo.css'
import '../../../public/kisses.jpg'

function Corpo(){
    return(
        <>
        <div className = "corpo">
            <div className = "caixa">
            <h2>Olá sejam bem-vindos! </h2>
            <h2 className="meunome">Larissa Alcantara</h2>
            <h2>Dev FrontEnd</h2>
            
            <button type="button" class="btn btn-danger button">saiba mais sobre mim...</button>
            </div>
            <div className="imagem">
                <img src = "../../../public/enrolados.jpg" alt = "enrolados"></img>
                
            </div>
        
        </div>
        
        
        {/* <Carrossel /> */}
        </>
    )
}
export default Corpo 
