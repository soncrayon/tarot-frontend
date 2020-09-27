import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { LoginTitle } from './loginTitle'

class Signup extends Component {

  constructor() {
    super();
    this.state = { 
      first_name: '',
      last_name: '',
      email: '',
      password: '',
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
    this.props.createUserAccount(user)
  };

  redirectToSignin = () => {
    this.props.history.push('/')
  }

  redirectToApp = () => {
    this.props.history.push('/home')
    alert("You've sucessfully created your account! Click OK to log in.")
  }

handleErrors = () => {
  if (this.props.errors) {
      return (
        <div>
          <ul>{this.props.errors.map((error) => {
            return <li key={error}>{error}</li>
          })}
          </ul> 
        </div>
      )
    }
  return null 
  }

  componentDidUpdate (prevProps) {
    if (prevProps.loggedInStatus !== this.props.loggedInStatus) {
        if (this.props.loggedInStatus === true) {
          this.redirectToApp()
        }
    }
  }

render() {
    const {first_name, last_name, email, password} = this.state
return (
      <div className="credential_background">

        <div className="credential">
    
            <div className="form_half">

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
                  placeholder="Email"
                  type="text"
                  id="email"
                  className="input"
                  value={email}
                  onChange={this.handleChange}
                />
                <br></br>
                <input 
                  placeholder="Password"
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
                  CREATE ACCOUNT
                </button>
            
              </form>

              <button onClick={this.redirectToSignin} className="link">RETURN TO LOGIN</button>

              <div>

                {this.handleErrors()}

              </div>
            </div>

            <div className="app_title_half">
            </div>

          </div>

          <LoginTitle /> 

      </div>
    );
  }
}
export default withRouter(Signup);