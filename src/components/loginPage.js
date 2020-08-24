import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

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
                console.log(response)
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
    
    UNSAFE_componentWillMount() {
        return this.props.loggedInStatus ? this.redirectToApp() : null
    }

    componentDidMount(){
        document.querySelector('nav').style.display = "none";
     }
  
     componentWillUnmount(){
        document.querySelector('nav').style.display = "flex";
     }

    render(){

        const {email, password} = this.state

        return(
            <div className="credential_background">
                <p  className="main_title">ORI</p>
                <p className="subtitle">Tarot</p>

                    <form className="login_form" onSubmit={this.handleSubmit}>
                        <label className="label">
                            Email: <br></br>
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
                            Password: <br></br>
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
                            value="Login" 
                            className="submit_button"
                            disabled={!this.validateForm()}
                            />
                    </form>

                    <br></br>

                    <button onClick={this.redirectToSignup} className="link">Don't have an account?</button>

                    <div>
                        {this.state.errors ? this.handleErrors() : null}
                    </div>
            </div>
        )
    }
}

export default withRouter(LoginPage) 