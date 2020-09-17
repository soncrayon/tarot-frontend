import React, { Component } from 'react';
import DetailedCardModal from '../../components/card_descriptions/detailedCardModal'

class CardDescriptions extends Component {

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

                    <div className="tarot_suit">
                        {this.props.cards.filter(card => card.image.includes("major")).map(card => {
                            return <button className="detailed_card_link" onClick={() => this.displayDetailedCard(card.id)}>{card.name}</button>
                            }
                        )}
                    </div>

                    <h2>Cups</h2>

                    <div className="tarot_suit">
                        {this.props.cards.filter(card => card.image.includes("cups")).map((card) => {
                            return <button className="detailed_card_link" onClick={() => this.displayDetailedCard(card.id)}>{card.name}</button>
                            }
                        )}
                    </div>

                    <h2>Wands</h2>

                    <div className="tarot_suit">
                        {this.props.cards.filter(card => card.image.includes("wands")).map((card) => {
                            return <button className="detailed_card_link" onClick={() => this.displayDetailedCard(card.id)}>{card.name}</button>
                            }
                        )}
                    </div>

                    <h2>Swords</h2>

                    <div className="tarot_suit">
                        {this.props.cards.filter(card => card.image.includes("swords")).map((card) => {
                            return <button className="detailed_card_link" onClick={() => this.displayDetailedCard(card.id)}>{card.name}</button>
                            }
                        )}
                    </div>

                    <h2>Pentacles</h2>

                    <div className="tarot_suit">
                        {this.props.cards.filter(card => card.image.includes("pentacles")).map((card) => {
                            return <button className="detailed_card_link" onClick={() => this.displayDetailedCard(card.id)}>{card.name}</button>
                            }
                        )}
                    </div>
                    
                    {this.state.showDetailedCard ? <DetailedCardModal card={this.state.cardToShow} closeDetailedCard={this.closeDetailedCard}/> : null }
                   
            </div>
        )
    }
}

export default CardDescriptions