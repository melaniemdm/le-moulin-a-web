import './style.scss'
import tBleu from'../../assets/tBleu.png';
import photo from '../../assets/nous.png'

export default function Presentation(){
    return <div className="presentationContainerGlobal" id='presentation'>
      

     <div className="containerImg" ><img src={photo} alt='photoDesFilles' id='photoID'></img>
    </div>
   
<div className='bloc2'>
  <div className='triangleTitle'> <h1 className='titlePresentation'>Présentation</h1> <img src={tBleu} alt='triangleBleu'className='triangleBleu'></img></div> 
    <div className='textePresentation'><strong>Transformez votre marque</strong> en une expérience inoubliable pour vos clients grâce à Melanie et Louise. <br></br><strong>L'agence de design et de développement de sites web </strong>qui associe une <strong>approche humaine à une expertise pointue </strong>en identité de marque et développement de sites. 
    <br></br>Laissez-nous <strong>défendre votre marque et générer des résultats exceptionnels </strong>qui émerveilleront vos clients.</div></div>


    </div>
 
   
}