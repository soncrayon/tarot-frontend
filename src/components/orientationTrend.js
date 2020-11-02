import React from 'react'
import { VictoryPie } from 'victory';

export const OrientationTrend = (props) => {

    let orientationDataForPie
    
    if (props.orientationCardData.upright > 0 ||
        props.orientationCardData.reversed > 0) {
            orientationDataForPie = [
                {x: `Upright ${props.orientationCardData.upright}%`, y: props.orientationCardData.upright},
                {x: `Reversed ${props.orientationCardData.reversed}%`, y: props.orientationCardData.reversed}
            ]
    } else { 
        orientationDataForPie =[{
            x: "No data for visualization yet."
        }]
    }

    return (
        <div className="trend_block_data">
            <div className="trend_block_figures">
                <div className="trend_block_figures_key">

                    <VictoryPie 
                    innerRadius={75}
                    colorScale={["darkgoldenrod", "black"]}
                    data={orientationDataForPie}
                    />
                        
                </div>
            </div>
                <div className="trend_block_explanation">
                    <div className="trend_block_explanation_text">{props.trendText}</div>
                </div>
            </div>
    )
}