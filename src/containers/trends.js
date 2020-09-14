import React, { Component } from 'react';
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Trends extends Component {

    componentDidMount(){
        this.props.fetchUserSuits(this.props.user.id)
        this.props.fetchUserOrientations(this.props.user.id)
        this.props.fetchAllSuits()
        this.props.fetchAllOrientations()
    }

    render (){

        const cardData = {
            suitData: {
                userSuits: {
                    wands: typeof this.props.users.metrics.user_suits.wands !== "undefined" ? this.props.users.metrics.user_suits.wands : 0,
                    swords: typeof this.props.users.metrics.user_suits.swords !== "undefined" ? this.props.users.metrics.user_suits.swords : 0,
                    cups: typeof this.props.users.metrics.user_suits.cups !== "undefined" ? this.props.users.metrics.user_suits.cups : 0,
                    pentacles: typeof this.props.users.metrics.user_suits.pentacles !== "undefined" ? this.props.users.metrics.user_suits.pentacles : 0,
                    major_arcana: typeof this.props.users.metrics.user_suits['major arcana'] !== "undefined" ? this.props.users.metrics.user_suits['major arcana'] : 0
                },
                allSuits: {
                    wands: typeof this.props.users.metrics.all_suits.wands !== "undefined" ? this.props.users.metrics.all_suits.wands : 0,
                    swords: typeof this.props.users.metrics.all_suits.swords !== "undefined" ? this.props.users.metrics.all_suits.swords : 0,
                    cups: typeof this.props.users.metrics.all_suits.cups !== "undefined" ? this.props.users.metrics.all_suits.cups : 0,
                    pentacles: typeof this.props.users.metrics.all_suits.pentacles !== "undefined" ? this.props.users.metrics.all_suits.pentacles : 0,
                    major_arcana: typeof this.props.users.metrics.all_suits['major arcana'] !== "undefined" ? this.props.users.metrics.all_suits['major arcana'] : 0
                }
            },
            orientationData: {
                userOrientation: {
                    upright: typeof this.props.users.metrics.user_orientations.upright !== "undefined" ? this.props.users.metrics.user_orientations.upright : 0,
                    reversed: typeof this.props.users.metrics.user_orientations.reversed !== "undefined" ? this.props.users.metrics.user_orientations.reversed : 0
                },
                allOrientations: {
                    upright: typeof this.props.users.metrics.all_orientations.upright !== "undefined" ? this.props.users.metrics.all_orientations.upright : 0,
                    reversed: typeof this.props.users.metrics.all_orientations.reversed !== "undefined" ? this.props.users.metrics.all_orientations.reversed : 0
                }
            }
        }

        const maxMinVal = (obj) => {
            const sortedEntriesByVal = Object.entries(obj).sort(([, v1], [, v2]) => v1 - v2);
          
            return {
              min: sortedEntriesByVal[0],
              max: sortedEntriesByVal[sortedEntriesByVal.length - 1],
              sortedObjByVal: sortedEntriesByVal.reduce((r, [k, v]) => ({ ...r, [k]: v }), {}),
            };
          };

        const findHighestPercentage = (dataCategory) => {
            const highestPercentageData = {
                userSuits: maxMinVal(cardData.suitData.userSuits),
                allSuits: maxMinVal(cardData.suitData.allSuits),
                userOrientations: maxMinVal(cardData.orientationData.userOrientation),
                allOrientations: maxMinVal(cardData.orientationData.allOrientations)
            }
            if (highestPercentageData[dataCategory].max[1] === 0) {
                return "none"
            }
            return highestPercentageData[dataCategory].max[0]
        }

        const getHighPercentageText = (dataCategory) => {
            const highPercentageTextData = {
                wands: "You've drawn a lot of WANDS.  Wands are the suit of inspiration, intention, and ambition.  It could be that, lately, you've been feeling creative, inspired, spurred to action, and/or envisioning outcomes.",
                swords: "You've drawn a lot of SWORDS.  Swords combine the emotion of cups and the intentionality of wands--they are the suit of action.  Several swords in your readings might mean that there is a lot of commotion in your life as you move toward a final goal.",
                cups: "You've drawn a lot of CUPS.  Cups are the suit of emotion and intuition.  A lot of cups in your readings can signal that the main forces at play in your current circumstances are rooted in the emotional realm.",
                pentacles: "You've drawn a lot of PENTACLES.  Pentacles are the suit of hopes made manifest, the home, and material gain.  Given the high number of pentacles in your readings, you could be enjoying the fruits of your labor or more likely, deriving inspiration from them to continue your work.",
                major_arcana: "You've drawn a lot of the MAJOR ARCANA.  The major arcana are the trump cards of the Tarot Deck, dealing with substantial life issues.  Take it as a sign that you need to pause and do some self-reflection.",
                upright: "Most of your cards are upright.  While there is no inherent meaning to this, you can take it as a sign that for now, status quo is an appealing option.",
                reversed: "Most of your cards are reversed.  Cards often have the opposite meaning when in the reversed orientation. They may contribute to a feeling that things aren't right or that you have a lack of clarity.  Most often, however, they are just a different perspective from which to interpret the path forward.",
                none: "You haven't drawn any cards yet.  Check back here after you've completed a few readings to get your stats."
            }
            return highPercentageTextData[findHighestPercentage(dataCategory)]
        }

        const getIcon = (dataCategory) => {
            const iconData = {
                wands: <FontAwesomeIcon icon="slash" />,
                swords: <FontAwesomeIcon icon="location-arrow" />,
                cups: <FontAwesomeIcon icon="trophy" />,
                pentacles: <FontAwesomeIcon icon="star" />,
                major_arcana: <FontAwesomeIcon icon="crown" />,
                upright: <FontAwesomeIcon icon="arrow-up" />, 
                reversed: <FontAwesomeIcon icon="arrow-down" />
            }
            return iconData[findHighestPercentage(dataCategory)]

        }

        return (
            <div className="trends">
                <div className="trends_title">
                    <h2>Your Trends</h2>
                </div>
                <div className="trends_data">
                    <div className="trend_block">
                        <div className="trend_block_title">
                            <h3>Your Suit Metrics</h3>
                        </div>
                        <div className="trend_block_data">
                            <div className="trend_block_figures">
                                <div className="trend_block_figures_title"><h3>Suit Percentages</h3></div>
                                <div className="trend_block_figures_key">
                                
                                    <div className="bar_div">
                                        <div className="bar_value">
                                            Wands: {cardData.suitData.userSuits.wands}%
                                        </div>
                                        <div className="bar_rep" style={{width: `${cardData.suitData.userSuits.wands}%`, backgroundColor: "blue"}}>
                                        </div>
                                    </div>                    
                                        
                                        
                                    <div className="bar_div">
                                        <div className="bar_value">
                                            Swords: {cardData.suitData.userSuits.swords}%
                                        </div>
                                        <div className="bar_rep" style={{width: `${cardData.suitData.userSuits.swords}%`, backgroundColor: "salmon"}}>
                                        </div>
                                    </div>                  
                                        
                                        
                                    <div className="bar_div">
                                        <div className="bar_value">
                                            Cups: {cardData.suitData.userSuits.cups}%
                                        </div>
                                        <div className="bar_rep" style={{width: `${cardData.suitData.userSuits.cups}%`, backgroundColor: "green"}}>
                                        </div>
                                    </div>                       
                                        
                                        
                                    <div className="bar_div">
                                        <div className="bar_value">
                                            Pentacles: {cardData.suitData.userSuits.pentacles}%
                                        </div>
                                        <div className="bar_rep" style={{width: `${cardData.suitData.userSuits.pentacles}%`, backgroundColor: "maroon"}}>
                                        </div>
                                    </div>        
                                        
                                        
                                    <div className="bar_div">
                                        <div className="bar_value">
                                            Major Arcana: {cardData.suitData.userSuits.major_arcana}%
                                        </div>
                                        <div className="bar_rep" style={{width: `${cardData.suitData.userSuits.major_arcana}%`, backgroundColor: "black"}}>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="trend_block_explanation">
                                <div className="trend_block_explanation_icon">{getIcon("userSuits")}</div>
                                <div className="trend_block_explanation_text">{getHighPercentageText("userSuits")}</div>
                            </div>
                        </div>
                    </div>
                    <div className="trend_block">
                        <div className="trend_block_title">
                            <h3>Suit Metrics for All Users</h3>
                        </div>
                        <div className="trend_block_data">
                            <div className="trend_block_figures">
                                <div className="trend_block_figures_title"><h3>Suit Percentages</h3></div>
                                <div className="trend_block_figures_key">
                                
                                    <div className="bar_div">
                                        <div className="bar_value">
                                            Wands: {cardData.suitData.allSuits.wands}%
                                        </div>
                                        <div className="bar_rep" style={{width: `${cardData.suitData.allSuits.wands}%`, backgroundColor: "blue"}}>
                                        </div>
                                    </div>                    
                                        
                                        
                                    <div className="bar_div">
                                        <div className="bar_value">
                                            Swords: {cardData.suitData.allSuits.swords}%
                                        </div>
                                        <div className="bar_rep" style={{width: `${cardData.suitData.allSuits.swords}%`, backgroundColor: "salmon"}}>
                                        </div>
                                    </div>                  
                                        
                                        
                                    <div className="bar_div">
                                        <div className="bar_value">
                                            Cups: {cardData.suitData.allSuits.cups}%
                                        </div>
                                        <div className="bar_rep" style={{width: `${cardData.suitData.allSuits.cups}%`, backgroundColor: "green"}}>
                                        </div>
                                    </div>                       
                                        
                                        
                                    <div className="bar_div">
                                        <div className="bar_value">
                                            Pentacles: {cardData.suitData.allSuits.pentacles}%
                                        </div>
                                        <div className="bar_rep" style={{width: `${cardData.suitData.allSuits.pentacles}%`, backgroundColor: "maroon"}}>
                                        </div>
                                    </div>        
                                        
                                        
                                    <div className="bar_div">
                                        <div className="bar_value">
                                            Major Arcana: {cardData.suitData.allSuits.major_arcana}%
                                        </div>
                                        <div className="bar_rep" style={{width: `${cardData.suitData.allSuits.major_arcana}%`, backgroundColor: "black"}}>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            </div>
                         
                        </div> 
                    <div className="trend_block">
                        <div className="trend_block_title">
                            <h3>Your Orientation Metrics</h3>
                        </div>
                        <div className="trend_block_data">
                            <div className="trend_block_figures">
                                <div className="trend_block_figures_title"><h3>Orientation Percentages</h3></div>
                                <div className="trend_block_figures_key">
                                
                                    <div className="bar_div">
                                        <div className="bar_value">
                                            Upright: {cardData.orientationData.userOrientation.upright}%
                                        </div>
                                        <div className="bar_rep" style={{width: `${cardData.orientationData.userOrientation.upright}%`, backgroundColor: "blue"}}>
                                        </div>
                                    </div>                    
                                        
                                        
                                    <div className="bar_div">
                                        <div className="bar_value">
                                            Reversed: {cardData.orientationData.userOrientation.reversed}%
                                        </div>
                                        <div className="bar_rep" style={{width: `${cardData.orientationData.userOrientation.reversed}%`, backgroundColor: "maroon"}}>
                                        </div>
                                    </div>                  
                                        
                                </div>
                            </div>
                                <div className="trend_block_explanation">
                                    <div className="trend_block_explanation_icon">{getIcon("userOrientations")}</div>
                                    <div className="trend_block_explanation_text">{getHighPercentageText("userOrientations")}</div>
                                </div>
                            </div>
                          
                        </div>
                    <div className="trend_block">
                        <div className="trend_block_title">
                            <h3>Orientation Metrics for All Users</h3>
                        </div>
                        <div className="trend_block_data">
                            <div className="trend_block_figures">
                                <div className="trend_block_figures_title">Orientation Percentages</div>
                                <div className="trend_block_figures_key">
                                
                                <div className="bar_div">
                                    <div className="bar_value">
                                        Upright: {cardData.orientationData.allOrientations.upright}%
                                    </div>
                                    <div className="bar_rep" style={{width: `${cardData.orientationData.allOrientations.upright}%`, backgroundColor: "blue"}}>
                                    </div>
                                </div>                    
                                    
                                    
                                <div className="bar_div">
                                    <div className="bar_value">
                                        Reversed: {cardData.orientationData.allOrientations.reversed}%
                                    </div>
                                    <div className="bar_rep" style={{width: `${cardData.orientationData.allOrientations.reversed}%`, backgroundColor: "maroon"}}>
                                    </div>
                                </div>                  
                                    
                            </div>
                        </div>
                        </div>
                        
                        </div>
                </div>
            </div>
                    
        
        )
    }
   
}

const mapStateToProps = state => {
    return {
    users: state.users, 
    loading: state.loading
    }
}

export default connect(mapStateToProps)(Trends)