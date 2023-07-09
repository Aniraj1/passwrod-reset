import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './form.css';

const PasswordResetForm = ({ onSubmit }) => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    // For making password visible
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);


    // For Matching the password
    const [passwordMatchError, setPasswordMatchError] = useState('');
    const [passwordLengthError, setPasswordLengthError] = useState('');

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setPasswordMatchError('Passwords does not match !');
            return;
        }

        if (password.length < 8) {
            setPasswordLengthError('Password should be at least 8 characters long!');
            return;
        }

        onSubmit(password, confirmPassword);
    };

    return (
        <form className="password-reset-form" onSubmit={handleSubmit}>
            <label className="form-label">New Password:</label>
            <div className="password-input-container">
                <input
                    className="form-input"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <FontAwesomeIcon
                    className="pos password-visibility-icon"
                    icon={showPassword ? faEyeSlash : faEye}
                    onClick={togglePasswordVisibility}
                />
            </div>
            <label className="form-label">Confirm Password:</label>
            <div className="password-input-container">
                <input
                    className="form-input"
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                <FontAwesomeIcon
                    className="pos password-visibility-icon"
                    icon={showConfirmPassword ? faEyeSlash : faEye}
                    onClick={toggleConfirmPasswordVisibility}
                />
            </div>
            {passwordMatchError && <div className='alertDiv'><h6 className="error-message">{passwordMatchError}</h6></div>}
            {passwordLengthError && <div className='alertDiv'><h6 className="error-message">{passwordLengthError}</h6></div>}
            <button className="form-button" type="submit">Reset Password</button>
        </form>
    );
};

export default PasswordResetForm;
