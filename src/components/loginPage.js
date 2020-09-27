import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { LoginTitle } from './loginTitle'

class LoginPage extends Component {

    state = {
        email:'',
        password:'',    
        errors:'',
    }

    validateForm = () => {
        return this.state.email.length && this.state.password.length;
      }

    handleSubmit =  (event) => {
      let user = {
        email: this.state.email,
        password: this.state.password
      }
        event.preventDefault()
        this.props.loginUser(user)
    };
    

    handleChange = (event) => {
        const {id, value} = event.target 
        this.setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    redirectToSignup = () => {
        this.props.history.push("/create_account"); 
    }

    handleErrors = () => {
      if (this.props.errors){
          return (
            <div>
              <ul>
              {this.props.errors.map(error => {
              return <li key={error}>{error}</li>
                })}
              </ul>
            </div>
          )
      }
      return null   
    }


    redirectToApp = () => {
      if (this.props.loggedInStatus){
          this.props.history.push("/home");
      }
    }

      componentDidUpdate (){
          this.redirectToApp()
      }

    render(){

        const {email, password} = this.state
        return(
            <div className="credential_background">
              
              <div className="credential"> 

                <div className="form_half">
                  <form className="login_form" onSubmit={this.handleSubmit}>
                      <label className="label">
                          <input 
                          type="email" 
                          id="email" 
                          className="input" 
                          placeholder="Enter email" 
                          value={email}
                          onChange={this.handleChange}
                          />
                      </label>
                      <br></br>
                      <label className="label">
                          <input 
                          type="password" 
                          id="password" 
                          className="input" 
                          placeholder="Enter password"
                          value={password} 
                          onChange={this.handleChange}
                          />
                      </label>
                      <br></br>
                          <input 
                          type="submit" 
                          value="LOGIN" 
                          className="submit_button"
                          disabled={!this.validateForm()}
                          />
                  </form>

                  <br></br>

                  <button onClick={this.redirectToSignup} className="create_account-button">SIGN UP</button>

                  <div>
                      {this.handleErrors()}
                  </div>
                </div>

                <div className="app_title_half">
                </div>

              </div>

                <LoginTitle />
                
            </div>
        )
    }
}

export default withRouter(LoginPage) 