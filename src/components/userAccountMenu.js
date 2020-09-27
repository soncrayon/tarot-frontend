import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const UserAccountMenu = (props) => (
    <div className="user_account_menu"> 
        <div className="user_menu_open">
            
            <button onClick={() => {props.toggleUserAccountMenu()}}>
                
                <p className="user_name">{props.user.first_name} {props.user.last_name} <FontAwesomeIcon icon="caret-down" /></p>

            
            </button>
        
        </div>
    </div>    
)

export default UserAccountMenu 
 