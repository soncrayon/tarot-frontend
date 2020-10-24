import React from 'react'
import { VictoryPie } from 'victory';

export const ArcanaTrend = (props) => {
    
    let arcanaDataForPie
    
    if (props.arcanaCardData.wands > 0 ||
        props.arcanaCardData.sword > 0 ||
        props.arcanaCardData.cups > 0 ||
        props.arcanaCardData.pentacles > 0 ||
        props.arcanaCardData.major_arcana > 0) {
            arcanaDataForPie = [
                {x: `Wands ${props.arcanaCardData.wands}%`, y: props.arcanaCardData.wands},
                {x: `Swords ${props.arcanaCardData.swords}%`, y: props.arcanaCardData.swords},
                {x: `Cups ${props.arcanaCardData.cups}%`, y: props.arcanaCardData.cups},
                {x: `Pentacles ${props.arcanaCardData.pentacles}%`, y: props.arcanaCardData.pentacles},
                {x: `Major Arcana ${props.arcanaCardData.major_arcana}%`, y: props.arcanaCardData.major_arcana}
            ]
    } else { 
        arcanaDataForPie =[{
            x: "No data for visualization yet. Go draw some cards!"
        }]
    }
    
    
    return (
        <div className="trend_block_data">
            <div className="trend_block_figures">
                <div className="trend_block_figures_key">

                    <VictoryPie 
                    innerRadius={75}
                    colorScale={["maroon", "darkgreen", "darkblue", "darkgoldenrod", "black"]}
                    data={arcanaDataForPie}
                    />
 
                </div>
            </div>
            <div className="trend_block_explanation">
                <div className="trend_block_explanation_text">{props.trendText}</div>
            </div>
        </div>
    )
}