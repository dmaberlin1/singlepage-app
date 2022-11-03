import {Link} from "react-router-dom";
import logoLinux from '../../img/opensuse-logo.png'
import  './Header.css'
const Header = () => {
  return(<>
      <nav className='nav'>
          <div className="nav-wrapper">
              <img src={logoLinux} className="logo-img brand-logo right" alt='logo'/>
              <ul id="nav-mobile" className="left hide-on-med-and-down">
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/about'>About</Link></li>
                  <li><Link to='/contact'>Contact</Link></li>
              </ul>
          </div>
      </nav>
  </>)
}
export {Header}