import logo from '../../assets/logo.png';
import './style.scss';

export default function Header(){
    return (
        <header>
 <div className="containerLogo">

                <img src={logo} alt="logo moulin a web" className="logo" id="logo"/>
              
            </div>
        </header>
    )
}