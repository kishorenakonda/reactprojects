import React from "react";

const Hemisphere = (props) => {
    const hemisphere = (props && props.latitude && props.latitude > 0) ? 'Northen' : 'Southern';
    return (
        <div>
            <div>
                Inside Hemisphere : {hemisphere}
            </div>
            <div>
                Latitude : {props.latitude}
            </div>
        </div>
    )
}

export default Hemisphere;