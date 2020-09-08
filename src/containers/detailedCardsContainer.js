import React, { Component } from 'react';

class DetailedCardContainer extends Component {

    displayDetailedCard = (id) => {
        let cardToShow = this.props.cards.filter(card => card.id === id)[0]
        console.log(cardToShow)
    }

    render(){
    
        return (
            <div className="detailed_card_container">
                    
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
                   
            </div>
        )
    }
}

export default DetailedCardContainer