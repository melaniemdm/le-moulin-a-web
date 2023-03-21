import './style.scss';
import tViolet from '../../assets/tViolet.png';
import img1 from '../../assets/IMG1.jpg';
import img2 from '../../assets/IMG2.jpg';
import img3 from '../../assets/IMG3.jpg';
import img4 from '../../assets/IMG4.jpg';
import img5 from '../../assets/IMG5.jpg';
import img6 from '../../assets/IMG6.jpg';
import img7 from '../../assets/IMG7.jpg';
import img8 from '../../assets/IMG8.jpg';
import img9 from '../../assets/IMG9.jpg';
import img10 from '../../assets/IMG10.jpg';
import img11 from '../../assets/IMG11.jpg';
import acoss from '../../assets/acoss.jpg';
import nature from '../../assets/nature.jpg';
import dsn from '../../assets/dsn.jpg';
import simpliste from '../../assets/simpliste.jpg';
import { SimpleModal, openModal } from 'mdm-simple-modal';
import 'mdm-simple-modal/dist/index.modern.css';
import { useState } from 'react';
console.log(dsn)
export default function Realisations(){
  const [pictureProjet, setPictureProjet] = useState("");

  function urlModal(src){
    setPictureProjet(src);
    openModal();
  }

console.log(pictureProjet)
    return  <div className='realisationTitle' id='realisation'>
    <div className='triangleTitleRea'>  <img src={tViolet} alt='triangleBViolet'className='triangleViolet'></img><h1 className='reaTitle'>Nos réalisations</h1>
 </div>
    <div className='realist'><div className="containerRea">
    <div id="flexbox">
      
      <div className="column">
 <a href='https://melaniemdm.github.io/testOn/' target="_blank" rel='noreferrer'>  <img src={img2} alt="Image1" width="100%" /></a>
 <SimpleModal text='' options={{bgColor:'white',width:'50%',height:'95%', imgUrl:pictureProjet, zIndex:'110',  maskBgColor:'rgba(211,211,211, .5)'}}/> <img src={img6} alt="Image2" width="100%" onClick={()=>urlModal(dsn)}/>
    <a href='https://intelligence-canine.fr/' target="_blank" rel='noreferrer'>  <img src={img3} alt="Image3" width="100%" /></a> 
      
     
      </div>
      <div className="column"> 
      <a href='https://melaniemdm.github.io/vendTout/' target="_blank" rel='noreferrer'> <img src={img11} alt="Image10" width="100%" /></a>
       <a href='http://www.grooving-family.com/photos.html' target="_blank" rel='noreferrer'>  <img src={img8} alt="Image4" width="100%" /></a>
       <a href=' https://melaniemdm.github.io/animals-love/' target="_blank" rel='noreferrer'>  <img src={img7} alt="Image5" width="100%" /></a> 
       <SimpleModal text='' options={{bgColor:'white',width:'95%',height:'95%', imgUrl:pictureProjet, zIndex:'110'}}/><img src={img10} alt="Image6" width="100%" onClick={()=>urlModal(simpliste)}/>
       <SimpleModal text='' options={{bgColor:'white',width:'95%',height:'95%', imgUrl:pictureProjet, zIndex:'110'}}/><img src={img4} alt="Image7" width="100%" onClick={()=>urlModal(acoss)}/>
     
      </div>
      <div className="column">
      <a href='https://adaptativeresume.netlify.app' target="_blank" rel='noreferrer'> <img src={img9} alt="Image8" width="100%" /></a>
      <SimpleModal text='' options={{bgColor:'white',width:'95%',height:'95%', imgUrl:pictureProjet, zIndex:'110'}}/><img src={img5} alt="Image9" width="100%" onClick={()=>urlModal(nature)}/>
     <a href='https://melaniemdm.github.io/vendTout/' target="_blank" rel='noreferrer'> <img src={img1} alt="Image10" width="100%" /></a> 
     
      </div>     
      
    </div>


    </div></div>
    </div>
}