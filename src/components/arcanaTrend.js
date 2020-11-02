import React from 'react'
import { VictoryPie } from 'victory';

export const ArcanaTrend = (props) => {

    const populateArcanaPie = () => {
        let arcanaDataForPie = [{
            x: "No data for visualization yet."
        }]
        Object.entries(props.arcanaCardData).map((arcana_key, arcana_value) => {
            if (arcana_key[1] > 0) {
                    arcanaDataForPie.push({x: `${arcana_key[0].charAt(0).toUpperCase() + arcana_key[0].slice(1)} ${arcana_key[1]}%`, y: arcana_key[1]})
            }
            return arcanaDataForPie
        })
        return nixDefaultLanguage(arcanaDataForPie)
    }

   const nixDefaultLanguage = (arcanaDataForPie) => {
        if (arcanaDataForPie.length > 1) {
            arcanaDataForPie.shift()
        }
        return arcanaDataForPie
   }
               
    return (
        <div className="trend_block_data">
            <div className="trend_block_figures">
                <div className="trend_block_figures_key">

                    <VictoryPie 
                    innerRadius={75}
                    colorScale={["maroon", "darkgreen", "darkblue", "darkgoldenrod", "black"]}
                    data={populateArcanaPie()}
                    />
 
                </div>
            </div>
            <div className="trend_block_explanation">
                <div className="trend_block_explanation_text">{props.trendText}</div>
            </div>
        </div>
    )
}