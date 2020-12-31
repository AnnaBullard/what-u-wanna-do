import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";

function LoginFormModal() {
  const dispatch = useDispatch();
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
      <button onClick={()=>{
        return dispatch(sessionActions.login({ credential:"Demo User", password:"password" })).catch(
          (res) => {
            if (res.data && res.data.errors) console.log(res.data.errors);
          }
        );
      }} >Demo</button>
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
