import React from 'react';

class Login extends React.Component {

  render () {
    return (
      <div className="auth-form">
        <div className="auth-btn-wrapper">
            <h2 className="start-header">Войдите в ваш аккаунт Stocktaking</h2>
            <input
              className="auth-input"
              placeholder="Введите логин"
            />
            <input
              className="auth-input"
              placeholder="Введите пароль"
            />
        </div>
      </div>
    )
  }
}

export default Login;
