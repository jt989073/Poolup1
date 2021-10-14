import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import * as sessionActions from '../../store/session';
import { Link } from "react-router-dom";

function ProfileButton({ user }) {
  const history = useHistory()
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push('/')
  };

  const eventRoute = (e) => {
    e.preventDefault()
    history.push('/events')
  }

  const attendingRoute = (e) => {
    e.preventDefault()
    history.push(`/users/${user.id}/attending`)
  }

  const hostingRoute = (e) => {
    e.preventDefault()
    history.push(`/users/${user.id}/hosting`)
  }

  return (
    <>
      <button onClick={hostingRoute} className="event-button">Hosting</button>
      <button onClick={attendingRoute} className="event-button">Attending</button>
      <button onClick={eventRoute} className="event-button">Events</button>
      <button className="profile-button" onClick={openMenu}>
        <i className="fas fa-user-circle" />
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <li>{user.username}</li>
          <li>{user.email}</li>
          <li>
            <button onClick={logout}>Log Out</button>
          </li>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;
