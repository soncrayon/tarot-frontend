import React, { Component } from 'react'
import ReactCardFlip from 'react-card-flip';
import CardBack from './cardBack'
import CardFront from './cardFront'

class Card extends Component {

    constructor(props){
        super(props)
        this.state = {
        isFlipped: true 
        }
    }

    drawOrDeleteCard = (period, card_position) => {
        if (card_position === "card_back"){
            return this.props.drawCard(period)
         }
         return this.props.deleteCard(period)
    }

    handleClick = (period, card_position) => () => {
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
        this.drawOrDeleteCard(period, card_position)
    }

    componentDidUpdate(prevProps){
        if(prevProps.card_refresh !== this.props.card_refresh){
            this.setState({isFlipped: true})
        }
    }

    render(){

        return (
        <ReactCardFlip 
        isFlipped={this.state.isFlipped} 
        flipDirection="horizontal" 
        > 
            <CardFront handleClick={this.handleClick} card={this.props.card}/>
    
            <CardBack handleClick={this.handleClick} card={this.props.card}/>
          
        </ReactCardFlip>
        )
    }     
       
}

export default Card 


