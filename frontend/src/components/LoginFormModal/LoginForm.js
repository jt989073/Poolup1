import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import {useHistory} from 'react-router-dom'
import { useDispatch } from "react-redux";
import "./LoginForm.css"

function LoginForm() {
  const history = useHistory()
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    )
  };

  

  return (
    <form className="modal-container" onSubmit={handleSubmit}>
      <div>Sign In to Poolupp</div>
      <div>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
      </div>
      <div>
        <label>
          Username or Email
          <input
            className="username-input"
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label className="password-label">
          Password
          <input
          className="password-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <button type="submit">Log In</button>
      </div>
    </form>
  );
}

export default LoginForm;
