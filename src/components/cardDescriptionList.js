import React from 'react'

export const CardDescriptionList = (props) => {
    return (
         <div className="tarot_suit">
            {props.cards.filter(card => card.image.includes(props.arcana)).map((card, index) => {
                return <button key={index} className="detailed_card_link" onClick={() => props.displayDetailedCard(card.id)}>{card.name}</button>
                }
            )}
        </div>
    )
}

