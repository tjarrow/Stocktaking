import React from 'react';

class Register extends React.Component {

  render () {
    return (
      <div className="auth-form">
      <div className="auth-btn-wrapper">
          <h2 className="start-header">Зарегистрируйтесь в Stocktaking</h2>
          <input
            className="auth-input"
            placeholder="Введите название организации"
          />
          <input
            className="auth-input"
            placeholder="Введите логин"
          />
          <input
            className="auth-input"
            placeholder="Введите пароль"
          />
          <input
            className="auth-input"
            placeholder="Повторите пароль"
          />
        </div>
      </div>
    )
  }
}

export default Register;
