import React, { Component } from 'react';
import CardContainer from './cardContainer'

class CardList extends Component {


    render(){
        return (
        
        <div>
           
            Past 
           <CardContainer /> 

           Present
           <CardContainer />

           Future 
           <CardContainer /> 
        </div>
        )
    }
}

export default CardList