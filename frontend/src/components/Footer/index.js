import { NavLink } from 'react-router-dom';
import './Footer.css'

function Footer({ isLoaded }) {


  return (
    <>
      <div className="footer-container">
        <div className="footer">
          <div className="github">
            <a href="https://github.com/jt989073">
              <img src="https://res.cloudinary.com/dqwy6sxtc/image/upload/v1634505608/poolupp/GitHub-Mark-Light-32px_ihnsdt.png" alt="" />
            </a>
          </div>
          <div className="linkedIn">
            <a href="https://www.linkedin.com/in/james-thompson-60174394/">
              <img className="linkedIn" src="https://res.cloudinary.com/dqwy6sxtc/image/upload/v1634505898/poolupp/61109_mh9nch.png" alt="" />
            </a>
          </div>
          Created By James Thompson
        </div>
      </div>
    </>
  );
}

export default Footer;
