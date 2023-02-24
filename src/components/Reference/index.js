import ref from '../../assets/ref.png'
import './style.scss';

export default function Reference(){
    return <div className='containerRef'>
        <h1>Ils nous ont fait confiance</h1>
        <img src={ref} alt="ref"></img>
    </div>
}