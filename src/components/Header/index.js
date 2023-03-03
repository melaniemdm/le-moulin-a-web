import logo from '../../assets/logo.png';
import './style.scss';
import Navigate from '../Navigate';
import ScrollToTop from 'react-scroll-to-top';

export default function Header(){
    return (
        <header>
 <div className="containerLogo">

                <img src={logo} alt="logo moulin a web" className="logo" id="logo"/>
              
            </div>
            <Navigate/>
            <ScrollToTop/>
        </header>
    )
}