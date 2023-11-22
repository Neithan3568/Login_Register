import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Custom validation for the email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Por favor, introduzca un correo electrónico válido.');
      return;
    }

    // Custom validation for password presence and length
    if (!password || password.length < 6 || password.length > 20) {
      alert('La contraseña debe tener entre 6 y 20 caracteres y no puede estar vacía.');
      return;
    }

    alert('Formulario enviado!');
  };

  return (
    <div className='wrapper bg-dark d-flex align-items-center justify-content-center w-100'>
      <div className='login'>
        <h2>Formulario de Inicio de Sesión</h2>
        <form className='needs-validation' noValidate onSubmit={handleSubmit}>
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
            <div className='invalid-feedback'>La contraseña debe tener entre 6 y 20 caracteres y no puede estar vacía.</div>
          </div>

          <div className='form-group form-check mb-2'>
            <input type='checkbox' className='form-check-input' />
            <label htmlFor='check' className='form-check-label'>Recordar</label>
          </div>

          <button type='submit' className='btn btn-success w-100 mt-2'>Iniciar Sesión</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
