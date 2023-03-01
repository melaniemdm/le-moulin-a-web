import Bando from '../Bando'
import './style.scss'

export default function Number(){
    return <div className='containerNumberEnsemble'>
        <Bando></Bando>
        <div className='containerNumber'>
   <div className='number' ><div className='rose'>1.</div> <div className='txtNumber'>Bien définir les objectifs</div></div>
   <div id='triangle-code-rose'></div>
   <div className='number'><div className='violet'>2.</div><div className='txtNumber'>Avoir un site de qualité</div></div>
   <div id='triangle-code-violet'></div>
   <div className='number'><div className='blue'>3.</div> <div className='txtNumber'>Générer le bon trafic</div></div></div>
</div>
   
}