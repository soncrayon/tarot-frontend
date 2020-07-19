import React, { Component } from 'react';
import CardContainer from './cardContainer'

class CardList extends Component {


    render(){

        return (
        <div>
           
            Past 
           <CardContainer cards={this.props.cards}/> 

           Present
           <CardContainer cards={this.props.cards}/>

           Future 
           <CardContainer cards={this.props.cards}/> 
        </div>
        )
    }
}

export default CardList