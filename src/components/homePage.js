import React, { Component } from 'react'

class HomePage extends Component {

    
    componentDidMount(){
        document.querySelector('nav').style.display = "none";
     }
  
     componentWillUnmount(){
        document.querySelector('nav').style.display = "flex";
     }

    render(){
        return(
            <div className="homepage_background">
                <p  className="main_title">ORI</p>
                <p className="subtitle">Tarot</p>
                <form className="login_form">
                    <label>
                        Username
                        <input type="text" value="username"></input>
                    </label>
                    <br></br>
                    <label>
                        Password
                        <input type="text" value="password"></input>
                    </label>
                    <br></br>
                    <input type="submit"></input>
                </form>
            </div>
        )
    }
}

export default HomePage