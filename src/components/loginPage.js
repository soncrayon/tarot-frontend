import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import LoginTitle from './loginTitle'

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
        event.preventDefault()
        const {email, password} = this.state
        let user = {
              email: email,
              password: password
            }
            
        axios.post('http://localhost:3001/login', {user}, {withCredentials: true})
            .then(response => {
              if (response.data.logged_in) {
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
    

    handleChange = (event) => {
        const {id, value} = event.target 
        this.setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    redirectToApp = () => {
        this.props.history.push("/home");
    }

    redirectToSignup = () => {
        this.props.history.push("/create_account"); 
    }

    handleErrors = () => {
        return (
          <div>
            <ul>
            {this.state.errors.map(error => {
            return <li key={error}>{error}</li>
              })}
            </ul>
          </div>
        )
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
                      {this.state.errors ? this.handleErrors() : null}
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