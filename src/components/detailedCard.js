import React from "react"

const DetailedCard = (props) => {
    return (
        <div className="card_detail">
            <div><img src={props.card.image} alt="card_detail_image"/></div>
            <div>{props.card.full_meaning}</div>
        </div>
    )
}

export default DetailedCard