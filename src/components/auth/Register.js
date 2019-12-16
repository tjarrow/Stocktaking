import React from 'react';
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
class Register extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      company_name: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      // Send to the main page
      this.props.history.push("/view");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      // Send to the main page
      this.props.history.push("/view");
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      company_name: this.state.company_name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
  }

  render () {
    return (
      <div className="auth-form">
      <form onSubmit={this.onSubmit} className="auth-btn-wrapper">
          <h2 className="start-header">Зарегистрируйтесь в Stocktaking</h2>
          <TextFieldGroup
            className="auth-input"
            name="company-name"
            error={errors.company_name}
            value={this.state.company_name}
            onChange={this.onChange}
            placeholder="Введите название организации"
          />
          <TextFieldGroup
            className="auth-input"
            name="email"
            error={errors.email}
            value={this.state.email}
            onChange={this.onChange}
            placeholder="Введите логин"
          />
          <TextFieldGroup
            className="auth-input"
            error={errors.password}
            value={this.state.password}
            onChange={this.onChange}
            placeholder="Введите пароль"
          />
          <TextFieldGroup
            className="auth-input"
            error={errors.password2}
            value={this.state.password2}
            onChange={this.onChange}
            placeholder="Повторите пароль"
          />
        </form>
      </div>
    )
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateProps,
  { registerUser }
)(withRouter(Register));
