import React from 'react'

const AppHeader = (props) => (
    <div className="AppHeader"> 
        <h2 className="AppTitle">ORI TAROT</h2>
        <p className="AppWelcome">Welcome, {props.first_name}.</p>
    </div>    
)

export default AppHeader 
 