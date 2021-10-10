import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <div className="signup-button-container">
          <NavLink className="signup-button" to="/signup">Sign Up</NavLink>
        </div>
      </>
    );
  }

  return (
    <div className="nav-bar">
      <div className="nav-container">
        <div className="home-container">
          <NavLink className="home-button" exact to="/">
            <img className="logo" src="https://res.cloudinary.com/dqwy6sxtc/image/upload/v1633838930/poolupp/transparent-logo_puvlsm.png" alt="" />
          </NavLink>
        </div>
            <div className="nav-button">
                {isLoaded && sessionLinks}
            </div>
      </div>
    </div>
  );
}

export default Navigation;
