import React from "react";
import "../css/Hemisphere.css";

const hemisphereConfig = {
    'northern': {
        text: 'It is a Nothern Hemisphere',
    },
    'southern': {
        text: 'It is a southern Hemisphere'
    }
}

const Hemisphere = (props) => {
    const hemisphere = (props && props.latitude && props.latitude > 0) ? 'northern' : 'southern';
    const { text } = hemisphereConfig[hemisphere];

    return (
        <div className={hemisphere}>
            <div>
                Inside Hemisphere : {text}
            </div>
            <div>
                Latitude : {props.latitude}
            </div>
        </div>
    )
}

export default Hemisphere;