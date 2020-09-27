import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ArcanaTrend } from './arcanaTrend'
import { OrientationTrend } from './orientationTrend'

class Trends extends Component {

    UNSAFE_componentWillMount(){
        this.props.fetchUserArcana(this.props.user.id)
        this.props.fetchUserOrientations(this.props.user.id)
        this.props.fetchAllArcana()
        this.props.fetchAllOrientations()
    }

    render (){

        const userArcanaMetrics = this.props.users.metrics.user_arcana
        const allArcanaMetrics = this.props.users.metrics.all_arcana
        const userOrientationMetrics = this.props.users.metrics.user_orientations
        const allOrientationMetrics = this.props.users.metrics.all_orientations

        const cardData = {
            arcanaData: {
                userArcana: {
                    wands: typeof userArcanaMetrics.wands !== "undefined" ? userArcanaMetrics.wands : 0,
                    swords: typeof userArcanaMetrics.swords !== "undefined" ? userArcanaMetrics.swords : 0,
                    cups: typeof userArcanaMetrics.cups !== "undefined" ? userArcanaMetrics.cups : 0,
                    pentacles: typeof userArcanaMetrics.pentacles !== "undefined" ? userArcanaMetrics.pentacles : 0,
                    major_arcana: typeof userArcanaMetrics.major_arcana !== "undefined" ? userArcanaMetrics.major_arcana : 0
                },
                allArcana: {
                    wands: typeof allArcanaMetrics.wands !== "undefined" ? allArcanaMetrics.wands : 0,
                    swords: typeof allArcanaMetrics.swords !== "undefined" ? allArcanaMetrics.swords : 0,
                    cups: typeof allArcanaMetrics.cups !== "undefined" ? allArcanaMetrics.cups : 0,
                    pentacles: typeof allArcanaMetrics.pentacles !== "undefined" ? allArcanaMetrics.pentacles : 0,
                    major_arcana: typeof allArcanaMetrics.major_arcana !== "undefined" ? allArcanaMetrics.major_arcana : 0
                }
            },
            orientationData: {
                userOrientation: {
                    upright: typeof userOrientationMetrics.upright !== "undefined" ? userOrientationMetrics.upright : 0,
                    reversed: typeof userOrientationMetrics.reversed !== "undefined" ? userOrientationMetrics.reversed : 0
                },
                allOrientations: {
                    upright: typeof allOrientationMetrics.upright !== "undefined" ? allOrientationMetrics.upright : 0,
                    reversed: typeof allOrientationMetrics.reversed !== "undefined" ? allOrientationMetrics.reversed : 0
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
                userArcana: maxMinVal(cardData.arcanaData.userArcana),
                allArcana: maxMinVal(cardData.arcanaData.allArcana),
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
                wands: "Mostly WANDS have been drawn.  Wands are the arcana of inspiration, intention, and ambition.  It could be that, lately, you've been feeling creative, inspired, spurred to action, and/or envisioning outcomes.",
                swords: "Mostly SWORDS have been drawn.  Swords combine the emotion of cups and the intentionality of wands--they are the arcana of action.  Several swords in your readings might mean that there is a lot of commotion in your life as you move toward a final goal.",
                cups: "Mostly CUPS have been drawn.  Cups are the arcana of emotion and intuition.  A lot of cups in your readings can signal that the main forces at play in your current circumstances are rooted in the emotional realm.",
                pentacles: "Mostly PENTACLES have been drawn.  Pentacles are the arcana of hopes made manifest, the home, and material gain.  Given the high number of pentacles in your readings, you could be enjoying the fruits of your labor or more likely, deriving inspiration from them to continue your work.",
                major_arcana: "Mostly MAJOR ARCANA have been drawn.  The major arcana are the trump cards of the Tarot Deck, dealing with substantial life issues.  Take it as a sign that you need to pause and do some self-reflection.",
                upright: "Most drawn cards are upright.  While there is no inherent meaning to this, you can take it as a sign that for now, status quo is an appealing option.",
                reversed: "Most drawn cards are reversed.  Cards often have the opposite meaning when in the reversed orientation. They may contribute to a feeling that things aren't right or that you have a lack of clarity.  Most often, however, they are just a different perspective from which to interpret the path forward.",
                none: "You haven't drawn any cards yet.  Check back here after you've completed a few readings to get your stats."
            }
            return highPercentageTextData[findHighestPercentage(dataCategory)]
        }

        const getIcon = (dataCategory) => {
            const iconData = {
                wands: <img src={require ('../artwork/wands.jpeg')} alt="wands"/>,
                swords: <img src={require ('../artwork/swords.jpeg')} alt="swords"/>,
                cups: <img src={require ('../artwork/cups.jpeg')} alt="cups"/>,
                pentacles: <img src={require ('../artwork/pentacles.jpeg')} alt="pentacles"/>,
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
                            <h3>Your Arcana Metrics</h3>
                        </div>
                        <ArcanaTrend 
                        arcanaCardData={cardData.arcanaData.userArcana}
                        arcanaClass="userArcana"
                        getIcon={getIcon}
                        getHighPercentageText={getHighPercentageText}
                        /> 
                    </div>

                    <div className="trend_block">
                        <div className="trend_block_title">
                            <h3>Arcana Metrics for All Users</h3>
                        </div>
                        <ArcanaTrend 
                        arcanaCardData={cardData.arcanaData.allArcana}
                        arcanaClass="allArcana"
                        getIcon={getIcon}
                        getHighPercentageText={getHighPercentageText}
                        /> 
                    </div> 

                    <div className="trend_block">
                        <div className="trend_block_title">
                            <h3>Your Orientation Metrics</h3>
                        </div>
                        <OrientationTrend 
                        orientationCardData={cardData.orientationData.userOrientation}
                        orientationClass="userOrientations"
                        getIcon={getIcon}
                        getHighPercentageText={getHighPercentageText}
                        /> 
                    </div>

                    <div className="trend_block">
                        <div className="trend_block_title">
                            <h3>Orientation Metrics for All Users</h3>
                        </div>
                        <OrientationTrend 
                        orientationCardData={cardData.orientationData.allOrientations}
                        orientationClass="allOrientations"
                        getIcon={getIcon}
                        getHighPercentageText={getHighPercentageText}
                        />   
                    </div>

                </div>
            </div>
                    
        )
    }
   
}

const mapStateToProps = state => {
    return {
    users: state.users, 
    }
}

export default connect(mapStateToProps)(Trends)