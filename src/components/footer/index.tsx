import { Link } from 'react-router-dom';

function Footer()
{
    return (
        <div className="footer">
        <span className="footer-left"><span className="beta">Version 1.0</span> | © Copyright | All Rights Reserved</span>
        <div className="footer-right">
          <Link to="/privacy-policy" target="_blank" className="ftrlink">Privacy Policy</Link>
          <Link to="/terms-of-service" target="_blank" className="ftrlink">Terms of Service</Link>
        </div>
      </div>)
}
export default Footer;

