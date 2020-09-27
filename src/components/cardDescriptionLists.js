import React, { Component } from 'react';
import DetailedCardModal from './detailedCardModal'
import { CardDescriptionList } from './cardDescriptionList';

class CardDescriptionLists extends Component {

    state = {
        view: null, 
        showDetailedCard: false,
        cardToShow: {}
    }
   
    displayDetailedCard = (id) => {
        
        let cardToShow = this.props.cards.filter(card => card.id === id)[0]
      
        this.setState({
            view: {position: "fixed"},
            showDetailedCard: true,
            cardToShow: cardToShow
        })
    }

    closeDetailedCard = () => {
        this.setState({
            view: null, 
            showDetailedCard:false 
        })
    }

    render(){
    
        return (
            <div className="detailed_card_container" style={this.state.view}>
                    
                <h2>The Major Arcana</h2>

                <CardDescriptionList 
                cards={this.props.cards} 
                displayDetailedCard={this.displayDetailedCard} 
                arcana="major" />

                <h2>Cups</h2>

                <CardDescriptionList 
                cards={this.props.cards} 
                displayDetailedCard={this.displayDetailedCard} 
                arcana="cups" />

                <h2>Wands</h2>

                <CardDescriptionList 
                cards={this.props.cards} 
                displayDetailedCard={this.displayDetailedCard} 
                arcana="wands" />

                <h2>Swords</h2>

                <CardDescriptionList 
                cards={this.props.cards} 
                displayDetailedCard={this.displayDetailedCard} 
                arcana="swords" />

                <h2>Pentacles</h2>
                <CardDescriptionList 
                cards={this.props.cards} 
                displayDetailedCard={this.displayDetailedCard} 
                arcana="pentacles" />
                    
                {this.state.showDetailedCard ? <DetailedCardModal card={this.state.cardToShow} closeDetailedCard={this.closeDetailedCard}/> : null }
                   
            </div>
        )
    }
}

export default CardDescriptionLists