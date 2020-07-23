import React, { Component } from 'react';
import CardContainer from './cardContainer'

class CardList extends Component {


    render(){

        return (
        <div>
           
            <h2>Past</h2> 
            <br></br>
           <CardContainer cards={this.props.cards}/> 

           <h2>Present</h2>
           <br></br>
           <CardContainer cards={this.props.cards}/>

           <h2>Future</h2> 
           <br></br>
           <CardContainer cards={this.props.cards}/> 
        </div>
        )
    }
}

export default CardList