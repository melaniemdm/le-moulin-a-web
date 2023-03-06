import './style.scss';
 import tBleu from '../../assets/tBleu.png'
export default function Prestations(){
    return <div className='containerPrestations' id='services'>
        <h1>Nos prestations</h1>
        <div className='listPresta'>
        <img src={tBleu} alt='triangleBleu'className='triangleBleuPresta1'></img>
        <img src={tBleu} alt='triangleBleu'className='triangleBleuPresta2'></img>
        <div className='containerListPresta'>
            <h3>Création d’identité visuelle</h3>
            <ul>
            <li>Logo, Typographie, Charte couleurs et Charte graphique</li></ul>
            <h3>Création d'outils de communication</h3>
            <ul>
            <li>Brochure, Catalogue, flyer, carte de visite etc.</li>
            <li><strong>Et / ou Web :</strong> Infographie, Newsletter, Bannière pub</li></ul>
            <h3>Site internet</h3>
           <ul>
            <li>Web Design, développement, intégration</li> 
            <ul></ul>
            <li>Référencement, suivi & modifications (et/ou formation)</li></ul>
        </div>
        </div>
       
    </div>
}