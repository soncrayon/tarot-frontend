import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const UserAccountMenu = (props) => (
    <div className="user_account_menu"> 
        <h3 className="user_name">{props.user.first_name} {props.user.last_name}</h3>
        <div className="user_menu_open"><button onClick={() => {props.toggleUserAccountMenu()}}><FontAwesomeIcon icon="caret-down" /></button></div>
    </div>    
)

export default UserAccountMenu 
 