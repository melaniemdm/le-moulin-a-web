import logo from '../../assets/logo.png';
import './style.scss';
import Navigate from '../Navigate';

export default function Header(){
    return (
        <header>
 <div className="containerLogo">

                <img src={logo} alt="logo moulin a web" className="logo" id="logo"/>
              
            </div>
            <Navigate/>
        </header>
    )
}