import './Footer.css'
import {Link} from "react-router-dom";
import footerLogo from '../../img/programmers_workstation-1.jpg'
const Footer = () => {
  return (<>

      <footer className="page-footer">
          <div className="container">
              <div className="row">
                  <div className="col l6 s12">
                      <img className='footer-img' src={footerLogo} alt=""/>
                      {/*<h5 className="white-text">Footer Content</h5>*/}
                      {/*<p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer*/}
                      {/*    content.</p>*/}
                  </div>
                  <div className="col l4 offset-l2 s12">

                      <ul>
                          <li><Link to='/'>Home</Link></li>
                          <li><Link to='/about'>About</Link></li>
                          <li><Link to='/contact'>Contact</Link></li>
                      </ul>
                  </div>
              </div>
          </div>
          <div className="footer-copyright">
              <div className="container">
                 <p className='copyright'> © 2022 dmaberlin</p>

              </div>
          </div>
      </footer>
  </>)
}
export {Footer}