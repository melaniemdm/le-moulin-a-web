import './style.scss'
// import tBleu from'../../assets/tBleu.png';
import photo from '../../assets/test.jpg'

export default function Presentation(){
    return <div className="presentationContainerGlobal">
      

     <div className="containerImg"><img src={photo} alt='photoDesFilles' id='photoID'></img>
    </div>
    {/* <img src={tBleu} alt='triangleBleu'className='triangleBleu'></img> */}
<div className='bloc2'>
    <h1 className='titlePresentation'>PRESENTATION</h1>
    <div className='textePresentation'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div></div>


    </div>
 
   
}