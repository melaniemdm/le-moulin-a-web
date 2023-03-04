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
            <li>Logo - Couleurs - Typographie - Charte graphique</li></ul>
            <h3>Création graphique</h3>
            <ul>
            <li>Création d’outils de communication </li>
            <li><strong>Et / ou Web :</strong> infographie - Newsletter - Bannière pub</li></ul>
            <h3>Site internet</h3>
           <ul>
            <li>Web Design - Développement - Integration</li> 
            <ul></ul>
            <li>Referencement - Suivi & modifications (et / ou formation)</li></ul>
        </div>
        </div>
       
    </div>
}