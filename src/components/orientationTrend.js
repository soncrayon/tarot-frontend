import React from 'react'

export const OrientationTrend = (props) => {
    return (
        <div className="trend_block_data">
            <div className="trend_block_figures">
                <div className="trend_block_figures_title"><h3>Orientation Percentages</h3></div>
                <div className="trend_block_figures_key">
                
                    <div className="bar_div">
                        <div className="bar_value">
                            Upright: {props.orientationCardData.upright}%
                        </div>
                        <div className="bar_rep" style={{width: `${props.orientationCardData.upright}%`, backgroundColor: "blue"}}>
                        </div>
                    </div>                    
                        
                        
                    <div className="bar_div">
                        <div className="bar_value">
                            Reversed: {props.orientationCardData.reversed}%
                        </div>
                        <div className="bar_rep" style={{width: `${props.orientationCardData.reversed}%`, backgroundColor: "maroon"}}>
                        </div>
                    </div>                  
                        
                </div>
            </div>
                <div className="trend_block_explanation">
                    <div className="trend_block_explanation_icon">{props.getIcon(props.orientationClass)}</div>
                    <div className="trend_block_explanation_text">{props.getHighPercentageText(props.orientationClass)}</div>
                </div>
            </div>
    )
}