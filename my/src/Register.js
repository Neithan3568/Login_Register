// RegistrationForm.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css';

function RegistrationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Custom validation for the email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Por favor, introduzca un correo electrónico válido.');
      return;
    }

    // Custom validation for password length
    if (password.length < 6 || password.length > 20) {
      alert('La contraseña debe tener entre 6 y 20 caracteres.');
      return;
    }

    // Custom validation for password match
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    alert('Registro exitoso!');
  };

  return (
    <div className='wrapper bg-dark d-flex align-items-center justify-content-center w-100'>
      <div className='login'>
        <h2>Formulario de Registro</h2>
        <form className='needs-validation' noValidate onSubmit={handleSubmit}>
          <div className='form-group was-validated mb-2'>
            <label htmlFor='name' className='form-label'>Nombre</label>
            <input
              type='text'
              className='form-control'
              id='name'
              value={name}
              onChange={handleNameChange}
              required
            />
            <div className='invalid-feedback'>Por favor, introduzca su nombre.</div>
          </div>

          <div className='form-group was-validated mb-2'>
            <label htmlFor='email' className='form-label'>Email</label>
            <input
              type='email'
              className='form-control'
              id='email'
              value={email}
              onChange={handleEmailChange}
              required
              pattern='^[^\s@]+@[^\s@]+\.[^\s@]+$'
            />
            <div className='invalid-feedback'>Por favor, introduzca un correo electrónico válido.</div>
          </div>

          <div className='form-group was-validated mb-2'>
            <label htmlFor='password' className='form-label'>Contraseña</label>
            <input
              type='password'
              className='form-control'
              id='password'
              value={password}
              onChange={handlePasswordChange}
              required
              minLength='6'
              maxLength='20'
            />
            <div className='invalid-feedback'>La contraseña debe tener entre 6 y 20 caracteres.</div>
          </div>

          <div className='form-group was-validated mb-2'>
            <label htmlFor='confirmPassword' className='form-label'>Confirmar Contraseña</label>
            <input
              type='password'
              className='form-control'
              id='confirmPassword'
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
              minLength='6'
              maxLength='20'
            />
            <div className='invalid-feedback'>Las contraseñas no coinciden.</div>
          </div>

          <button type='submit' className='btn btn-success w-100 mt-2'>Registrar</button>
        </form>

        <p className="mt-2">
          ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión aquí</Link>.
        </p>
      </div>
    </div>
  );
}

export default RegistrationForm;
