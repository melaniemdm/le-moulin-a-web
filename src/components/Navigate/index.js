import './style.scss';
import { HashLink as Link } from 'react-router-hash-link'

export default function Navigate(){
    return  <div className='containerNav'>
        <div className="vide"></div>
    <div className="container lime pullUp">
    
    <nav className="navigate">
         <div className="navItem"><Link to="/accueil" className="accueil">Home</Link> </div>
         <div className="navItem"> <Link to="/accueil#presentation" className="presentation">Présentation</Link></div>
         <div className="navItem"> <Link to="/accueil#services" className="services">Nos prestations</Link></div>
         <div className="navItem"> <Link to="/accueil#reallisation" className="pro">Nos réalisations</Link></div>
         <div className="navItem"> <Link to="/accueil#contactMe" className="contact">Contact</Link></div>
        </nav>
    
     
    </div>
    
    
    
            </div>
}