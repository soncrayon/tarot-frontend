import React, { Component } from 'react';

class AccountSettings extends Component {

  constructor() {
    super();
    this.state = { 
      first_name: '',
      last_name: '',
      email: '',
      password: ''
     };
  }


validateForm = () => {
  return this.state.first_name.length || 
  this.state.last_name.length ||
  this.state.email.length ||
  this.state.password.length;
}

  handleChange = (event) => {
    const {id, value} = event.target
    this.setState(prevState => ({
      ...prevState,
      [id]: value
    }))
  };

handleSubmit = (event) => {
    event.preventDefault()
    let user = {
      id: this.props.user.id, 
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password.length ? this.state.password : this.props.user.password 
    }
    this.props.updateUserAccount(user)
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
  if (this.props.errors){
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
    if (prevProps.user !== this.props.user) {
          this.successfulAccountUpdate()
    }
  }


render() {

    const {first_name, last_name, email, password} = this.state

    return (
             <div className="update_account">

              <h2>Update Your Account Information</h2>
              <p>Update by editing the form below.</p>

              <form className="update_account_form" onSubmit={this.handleSubmit}>
              <input
                  placeholder={this.props.user.first_name ? this.props.user.first_name : null}
                  type="text"
                  id="first_name"
                  className="update_input"
                  value={first_name}
                  onChange={this.handleChange}
                />
                <br></br>
              <input
                  placeholder={this.props.user.last_name ? this.props.user.last_name : null}
                  type="text"
                  id="last_name"
                  className="update_input"
                  value={last_name}
                  onChange={this.handleChange}
                />
                <br></br>
                <input
                  placeholder={this.props.user.email ? this.props.user.email : null}
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
                {this.handleErrors()}
              </div>
            </div>

    );
  }
}
export default AccountSettings