import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="login-button-container">
      <button className="login-button" onClick={() => setShowModal(true)}>Log In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </div>
  );
}

export default LoginFormModal;
