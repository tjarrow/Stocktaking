import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email:'',
      password:'',
      errors: {}
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData);
  }

 //  handleClick (event) {
 //     var apiBaseUrl = "http://localhost:8080/api/"; // или localhost:4000 ?
 //     var self = this;
 //     var payload = {
 //       "email": this.state.username,
 //       "password": this.state.password
 //     }
 //
 //     axios.post(apiBaseUrl + 'login', payload)
 //     .then(function (response) {
 //       console.log(response);
 //       if (response.data.code == 200) {
 //         console.log("Login successfull");
 //         // var uploadScreen=[];
 //         // uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
 //         // self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
 //     }
 //     else if (response.data.code == 204) {
 //       console.log ("Username password do not match");
 //     } else {
 //       console.log("Username does not exists");
 //       }
 //     }).catch(function (error) {
 //       console.log(error);
 //     });
 // }

  render () {
    const { errors } = this.state;

    return (
      <div className="auth-form">
        <form onSubmit={this.onSubmit} className="auth-btn-wrapper">
            <h2 className="start-header">Войдите в ваш аккаунт Stocktaking</h2>
            <TextFieldGroup
              className="auth-input"
              name="email"
              placeholder="Введите логин"
              error={errors.email}
              value={this.state.email}
              onChange={this.onChange}
              type="email"
            />
            <TextFieldGroup
              className="auth-input"
              name="password"
              placeholder="Введите пароль"
              error={errors.password}
              value={this.state.password}
              onChange={this.onChange}
              type="password"
            />
            <input
              type="submit"
              className="auth-submit"
            />
        </form>
      </div>
    )
  }
}

Login.propTypes = { // для проверки корректности типов вводимых данных
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect( //ES6 synthax
  mapStateToProps,
  { loginUser } // чтобы вытащить именно одно свойство из класса loginUser
)(Login);
