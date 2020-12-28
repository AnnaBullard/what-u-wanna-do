import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);
  const [fromType, setFormType] = useState("login");

  return (
    <>
      <button onClick={() => {
        setShowModal(true);
        setFormType("login");
        }}>Log In</button>
      <button onClick={() => {
        setShowModal(true);
        setFormType("signup")
        }}>Sign Up</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          {(fromType==="login") &&
            <LoginForm />
          }
          {(fromType==="signup") &&
            <SignupForm />
          }
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
