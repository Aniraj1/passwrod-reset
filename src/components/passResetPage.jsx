import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PasswordResetForm from './passResetForm';
import './form.css';


const PasswordResetPage = () => {
  const { uid, token } = useParams();
  const [resetStatus, setResetStatus] = useState('');

  const handleResetPassword = (password, confirmPassword) => {
    const resetUrl = `http://127.0.0.1:8000/api/user/reset-password/${uid}/${token}/`;
    const data = {
      password,
      password2: confirmPassword,
    };

    axios
      .post(resetUrl, data)
      .then((response) => {
        // Handle successful password reset
        setResetStatus('Password reset successful !!!');
      })
      .catch((error) => {
        // Handle password reset error
        setResetStatus('Password reset failed !!!');
      });
  };

  return (
    <div>
      <h1 className='heading'>Password Reset</h1>
      {resetStatus ? (
        <h4 className='altText'>{resetStatus}</h4>
      ) : (
        <PasswordResetForm onSubmit={handleResetPassword} />
      )}
    </div>
  );
};

export default PasswordResetPage;
