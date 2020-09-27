import React from 'react'

export const ArcanaTrend = (props) => {
    return (
        <div className="trend_block_data">
            <div className="trend_block_figures">
                <div className="trend_block_figures_title"><h3>Arcana Percentages</h3></div>
                <div className="trend_block_figures_key">
                
                    <div className="bar_div">
                        <div className="bar_value">
                            Wands: {props.arcanaCardData.wands}%
                        </div>
                        <div className="bar_rep" style={{width: `${props.arcanaCardData.wands}%`, backgroundColor: "blue"}}>
                        </div>
                    </div>                    
                        
                        
                    <div className="bar_div">
                        <div className="bar_value">
                            Swords: {props.arcanaCardData.swords}%
                        </div>
                        <div className="bar_rep" style={{width: `${props.arcanaCardData.swords}%`, backgroundColor: "salmon"}}>
                        </div>
                    </div>                  
                        
                        
                    <div className="bar_div">
                        <div className="bar_value">
                            Cups: {props.arcanaCardData.cups}%
                        </div>
                        <div className="bar_rep" style={{width: `${props.arcanaCardData.cups}%`, backgroundColor: "green"}}>
                        </div>
                    </div>                       
                        
                        
                    <div className="bar_div">
                        <div className="bar_value">
                            Pentacles: {props.arcanaCardData.pentacles}%
                        </div>
                        <div className="bar_rep" style={{width: `${props.arcanaCardData.pentacles}%`, backgroundColor: "maroon"}}>
                        </div>
                    </div>        
                        
                        
                    <div className="bar_div">
                        <div className="bar_value">
                            Major Arcana: {props.arcanaCardData.major_arcana}%
                        </div>
                        <div className="bar_rep" style={{width: `${props.arcanaCardData.major_arcana}%`, backgroundColor: "black"}}>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="trend_block_explanation">
                <div className="trend_block_explanation_icon">{props.getIcon(props.arcanaClass)}</div>
                <div className="trend_block_explanation_text">{props.getHighPercentageText(props.arcanaClass)}</div>
            </div>
        </div>
    )
}