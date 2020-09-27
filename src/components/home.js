import React, { Component } from 'react';
import CardDraw from './cardDraw'
import { GoverningCard } from './governingCard'

class Home extends Component {
    
    constructor(){
        super();
        this.state = {
            governingCard: null 
        }
    }

    componentDidMount (){
        return (
            this.setState({
                ...this.state,
                governingCard: <GoverningCard card={this.props.cards[Math.floor(Math.random() * this.props.cards.length)]}/>
            })
        )
    }
    
    render (){
        return (
            <div className="home">
    
                <div className="card_draw_and_governing_card">
    
                    <div className="card_draw">
                        <CardDraw 
                        user={this.props.user}
                        cards={this.props.cards} 
                        postReading={this.props.postReading} 
                        fetchReadings={this.props.fetchReadings}
                        /> 
                    </div>
    
                    <div className="governing_card">
                        {this.state.governingCard}
                    </div>
    
                </div>
    
            </div>
        )
    }
   
}

export default Home