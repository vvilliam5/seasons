import React from 'react';
import './SeasonDisplay.css'

const seasonConfig = {
    summer: {
        text: 'Its Summer!',
        iconName: 'sun'
    },
    winter: {
        text: 'Its Winter!',
        iconName: 'snowflake'
    }
}
const returnSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    }
    else {
        return lat < 0 ? 'summer' : 'winter';
    }
}
const SeasonDisplay = (props) => {
    const season = returnSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season];
    return (
        <div className={`${season} season-display`}>
            <i className={`top-left massive ${iconName} icon`}></i>
            <h1>{text}</h1>
            <i className={`bottom-right massive ${iconName} icon`}></i>
        </div>
    )
}

export default SeasonDisplay;