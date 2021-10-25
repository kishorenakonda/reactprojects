import React from "react";
import CustomModal from "./CustomModal";

const About = () => {
    return (
        <div>
            <div>
                <CustomModal></CustomModal>
            </div>
            <div className="ui raised very padded text container segment" style={{ marginTop: '80px' }}>
                <h3 className="ui header"> About </h3>
                <p> Inside About Component </p>
            </div>
        </div>
    )
}

export default About;