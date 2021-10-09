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


{/* <span class="text">Hover me</span>
<span class="line -right"></span>
<span class="line -top"></span>
<span class="line -left"></span>
<span class="line -bottom"></span> */}
