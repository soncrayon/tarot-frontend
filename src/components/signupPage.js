import React, { Component } from 'react';
import axios from 'axios'
import { withRouter } from 'react-router-dom'

class Signup extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      errors: ''
     };
  }

handleChange = (event) => {
    const {id, value} = event.target
    this.setState({
      [id]: value
    })
  };

handleSubmit = (event) => {
    event.preventDefault()
    const {first_name, last_name, email, password} = this.state
    let user = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password
    }
axios.post('http://localhost:3001/users', {user}, {withCredentials: true})
    .then(response => {
      if (response.data.status === 'created') {
        this.props.handleLogin(response.data)
        this.redirectToApp()
      } else {
        this.setState({
          errors: response.data.errors
        })
      }
    })
    .catch(error => console.log('api errors:', error))
  };

  redirectToApp = () => {
    this.props.history.push('/home')
    alert("You've sucessfully created your account!")
  }

  redirectToSignin = () => {
    this.props.history.push('/')
}

handleErrors = () => {
    return (
      <div>
        <ul>{this.state.errors.map((error) => {
          return <li key={error}>{error}</li>
        })}
        </ul> 
      </div>
    )
  }

  UNSAFE_componentWillMount() {
    return this.props.loggedInStatus ? this.redirectToApp() : null
}

componentDidMount(){
    document.querySelector('nav').style.display = "none";
 }

 componentWillUnmount(){
    document.querySelector('nav').style.display = "flex";
 }

render() {
    const {first_name, last_name, email, password} = this.state
return (
      <div className="credential_background">
        <h2>Create an Account</h2>

        <form className="signup_form" onSubmit={this.handleSubmit}>
        <input
            placeholder="First Name"
            type="text"
            id="first_name"
            className="input"
            value={first_name}
            onChange={this.handleChange}
          />
          <br></br>
        <input
            placeholder="Last Name"
            type="text"
            id="last_name"
            className="input"
            value={last_name}
            onChange={this.handleChange}
          />
          <br></br>
          <input
            placeholder="email"
            type="text"
            id="email"
            className="input"
            value={email}
            onChange={this.handleChange}
          />
          <br></br>
          <input 
            placeholder="password"
            type="password"
            id="password"
            className="input"
            value={password}
            onChange={this.handleChange}
          />
          <br></br>
        
          <button 
          placeholder="submit" 
          type="submit" 
          className="submit_button">
            Create Account
          </button>
      
        </form>

        <button onClick={this.redirectToSignin} className="link">Return to Login</button>

        <div>
          {this.state.errors ? this.handleErrors() : null}
        </div>

      </div>
    );
  }
}
export default withRouter(Signup);