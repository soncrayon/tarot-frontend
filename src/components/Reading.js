import React, { Component } from 'react';
// import { Card } from '../components/Card'

// time for some CSS class manipulation here--when you arrive on the page, show a list of readings with the first card image and the reading date as a link
// when the link is clicked, the class is toggles so that the background is grayed out and a splash is displayed with the details of the reading
// and the option to exit (back to the readings list) or to delete the reading 

class Reading extends Component {

    // showReading = () => {
    //     this.props.fadeUserReadingsBackground()
    //     this.props.showExpandedReading()
    //     alert('That click works')
    // }

    // Move the above function into the userReadings container and include a close and delete Reading button 

    render(){
        return (
            <div className="reading_thumbnail">
                {/* <button onClick={() => this.showReading()}>{this.props.reading.date_time_created}</button> */}
                {/* <br></br> */}
                <img src={this.props.reading.cards[0].image} alt="reading_pic" onClick={() => this.props.displayFullReading()}></img>
                <h3>{this.props.reading.date_time_created}</h3>
            </div>
        )
    }
}

export default Reading