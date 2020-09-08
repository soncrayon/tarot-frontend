import React from 'react';
import CardDraw from './cardDraw'
import GoverningCard from '../components/governingCard'

const Home = (props) => {
    return (
        <div className="home">

            <div className="card_draw_and_governing_card">

                <div className="card_draw">
                    <CardDraw 
                    user={props.user}
                    cards={props.cards} 
                    postReading={props.postReading} 
                    fetchReadings={props.fetchReadings}
                    deleteCard={props.deleteCard}
                    /> 
                </div>

                <div className="governing_card">
                    <GoverningCard 
                    card={props.cards[Math.floor(Math.random() * props.cards.length)]}
                    />
                </div>

            </div>

        </div>
    )
}

export default Home