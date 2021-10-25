import React from "react";
import { Link } from "react-router-dom";
import ReactModal from "./ReactModal";

class Contact extends React.Component {
    // Programatically redirecting to new route from current route
    // setTimeout(() => {
    //     props.history.push("/about")
    // }, 2000);

    // return (
    //     <div className="ui raised very padded text container segment" style={{ marginTop: '80px' }}>
    //         <h3 className="ui header"> Contact </h3>
    //         <p> Inside Contact Component </p>
    //     </div>
    // )

    onRouteTo(user) {
        const url = "/card/" + user;
        this.props.history.push(url);
    }

    render() {
        return (
            <div>
                <ReactModal></ReactModal>
                <div className="ui raised very padded text container segment" style={{ marginTop: '80px' }}>
                    {/* <Link to="/card/kishore" className="ui header"> Kishore </Link> */}
                    <h3 className="ui header" onClick={this.onRouteTo('kishore')}> Contact </h3>
                    <p> Click to view kishore card </p>
                </div>

                <div className="ui raised very padded text container segment" style={{ marginTop: '80px' }}>
                    <Link to="/card/kumar" className="ui header"> Kumar </Link>
                    <p> Click to view kumar card </p>
                </div>
            </div>
        )
    }
}

export default Contact;