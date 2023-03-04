import './style.scss';
import close from '../../assets/close.png'
function Contact(){
    return(
      <section id="contactMe">  
      
        <div className="containerContact" >
   
          <div className="containerForm"><img onClick={closeModal}src= {close} alt='close'></img>
          
   
            <iframe
              src="https://tally.so/r/wAzdMD"
    
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Nous contacter">
            </iframe>
  
          </div>
  
  
        </div></section>
    );
  }
  export default Contact;

  function closeModal(){
const modal = document.querySelector('.containerContact');
modal.style.display='none';
  }

 export function openModal(){
    const modal = document.querySelector('.containerContact');
modal.style.display='flex';
return 0
  }
 