import './style.scss';
import { HashLink as Link } from 'react-router-hash-link'
import { openModal } from '../Contact';


export default function Navigate(){
    return     <div className="containerNav lime pullUp ">
    
    <nav className="navigate">
         <div className="navItem"><Link to="/accueil" className="accueil">Home</Link> </div>
         <div className="navItem"> <Link to="/accueil#presentation" className="presentation">Présentation</Link></div>
         <div className="navItem"> <Link to="/accueil#services" className="services">Nos prestations</Link></div>
         <div className="navItem"> <Link to="/accueil#realisation" className="pro">Nos réalisations</Link></div>
         <div className="navItem"> <Link  to="/accueil#contactMe" className="contact" onClick={openModal}>Contact</Link></div>
        </nav>
    
     <div className='sectionSuivante'> </div>
    </div>
    
    
    
        
}

