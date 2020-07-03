import React, { Component } from 'react';
import DailyCard from './dailyCard'

class DailyCards extends Component {
    render(){
        return (
            <div>
                <h3>Here are your governing cards for this session.</h3>
                <DailyCard /> 
            </div>
        )
    }
}

export default DailyCards