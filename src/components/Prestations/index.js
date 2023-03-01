import './style.scss';
// import tBleu from '../../assets/tBleu.png'
export default function Prestations(){
    return <div className='containerPrestations'>
        <h1>NOS PRESTATIONS</h1>
        <div className='listPresta'>
        {/* <img src={tBleu} alt='triangleBleu'className='triangleBleuPresta1'></img>
        <img src={tBleu} alt='triangleBleu'className='triangleBleuPresta2'></img> */}
        <div className='containerListPresta'>
            <h3>CREATION GRAPHIQUE VISUELLE</h3>
            <ul>
            <li>Logo - Couleurs - Typographie - Charte graphique</li></ul>
            <h3>CREATION GRAPHIQUE</h3>
            <ul>
            <li>Outils de communication - Affiches - Brochures</li>
            <li><strong>Et / ou Web :</strong> infigraphie - Newsletter - Bannière pub</li></ul>
            <h3>SITE INTERNET</h3>
           <ul>
            <li>Web Design - Développement - Integration</li> 
            <ul></ul>
            <li>Referencement - Suivi & modiufications (et / ou formation)</li></ul>
        </div>
        </div>
       
    </div>
}