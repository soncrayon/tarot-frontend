import React, { Component } from 'react';
// import { Card } from '../components/Card'

// time for some CSS class manipulation here--when you arrive on the page, show a list of readings with the first card image and the reading date as a link
// when the link is clicked, the class is toggles so that the background is grayed out and a splash is displayed with the details of the reading
// and the option to exit (back to the readings list) or to delete the reading 

class Reading extends Component {

    showReading = () => {
        alert('That click works')
    }

    render(){
        return (
            <div className="">
                {/* reset the database so readings with no date are purged and then remove the or operator below */}
                <button onClick={() => this.showReading()}>View</button>
                <p>{this.props.reading.date || "No date for this one"}</p>
            </div>
        )
    }
}

export default Reading