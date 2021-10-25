import React from "react";

class Card extends React.Component {

    state = { user: '' };

    componentDidMount() {
        console.log("props", this.props);
        let user = this.props.match.params.user;
        console.log("user", user);
        this.setState({ user: user });
    }

    render() {
        const { user } = this.state;
        return (
            <div className="ui raised very padded text container segment" style={{ marginTop: '80px' }}>
                <h3 className="ui header"> Card : {user} </h3>
            </div>
        )
    }
}

export default Card;