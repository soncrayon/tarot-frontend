import React, { Component } from 'react';
import axios from 'axios'

class AccountSettings extends Component {

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


validateForm = () => {
  return this.state.first_name.length && 
  this.state.last_name.length &&
  this.state.email.length && 
  this.state.password.length;
}

  handleChange = (event) => {
    const {id, value} = event.target
    this.setState({
      [id]: value
    })
  };

handleSubmit = (event) => {
    event.preventDefault()
    let user = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password
    }
  axios.put(`http://localhost:3001/users/${this.props.user.id}`, {user})
    .then(response => {
      if (response.data.status === 'updated') {
        this.successfulAccountUpdate()
        this.props.updateUserAfterAccountSettingsEdit(response.data.user)
      } else {
        this.setState({
          errors: response.data.errors
        })
      }
    })
    .catch(error => console.log('api errors:', error))
  };

successfulAccountUpdate = () => {
    alert("You've sucessfully updated your account information.")
    return this.setState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        errors: ''
      })
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

render() {

    const {first_name, last_name, email, password} = this.state

    return (
             <div className="update_account">

              <h2>Update Your Account Information</h2>
              <p>Update by editing the form below or you can delete your account.</p>

              <form className="update_account_form" onSubmit={this.handleSubmit}>
              <input
                  placeholder={this.props.user.first_name}
                  type="text"
                  id="first_name"
                  className="update_input"
                  value={first_name}
                  onChange={this.handleChange}
                />
                <br></br>
              <input
                  placeholder={this.props.user.last_name}
                  type="text"
                  id="last_name"
                  className="update_input"
                  value={last_name}
                  onChange={this.handleChange}
                />
                <br></br>
                <input
                  placeholder={this.props.user.email}
                  type="text"
                  id="email"
                  className="update_input"
                  value={email}
                  onChange={this.handleChange}
                />
                <br></br>
                <input 
                  placeholder="Password"
                  type="password"
                  id="password"
                  className="update_input"
                  value={password}
                  onChange={this.handleChange}
                />
                <br></br>
              
                <button 
                placeholder="submit" 
                type="submit" 
                className="update_submit_button"
                disabled={!this.validateForm()}>
                  UPDATE ACCOUNT
                </button>
            
              </form>

              <div>
                {this.state.errors ? this.handleErrors() : null}
              </div>
            </div>

    );
  }
}
export default AccountSettings