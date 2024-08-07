import logo from '../../assets/img/logo.png';
import "./footer.css"
export default function Footer1(){
    const handleGridLogoClick=()=>{
        window.open('https://griddynamics.com', '_blank');
      }
    return  <div className="footer-1">
    <img src={logo} className="footer-logo logo-footer" alt="Grid dynamics logo" onClick={handleGridLogoClick}/>
    <p className="help-feedback">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="footer__link-icon">
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" className="footer__link-icon-content"></path>
      </svg>
      Help and feedback
    </p>
    <p className="grid-dynamics">Grid Dynamics &copy; 2006-2024</p>
  </div>
}