import React from "react";
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {
    // setTimeout(() => {
    //     props.history.push("/home");
    // }, 2000);

    return (
        <nav className="ui raised very padded segment">
            {/* <a className="ui teal inverted segment"> Kishore </a> */}
            <div className="ui right floated header">
                {/* a href tag loads the page from server everytime */}
                {/* <button className="ui button"> <a href="/home"> Home </a> </button>
                <button className="ui button"> <a href="/about"> About </a> </button>
                <button className="ui button"> <a href="/contact"> Contact </a> </button> */}

                <button className="ui button"> <Link to="/home"> Home </Link> </button>
                <button className="ui button"> <Link to="/about"> About </Link> </button>
                {/* <button className="ui button"> <Link to="/contact"> Contact </Link> </button> */}
                <button className="ui button"> <NavLink to="/contact"> Contact </NavLink> </button>

                {/* NavLink has inbuilt active attribute with which we can apply a css if needed for the button */}
            </div>
        </nav>
    )
}

export default withRouter(Navbar);

// for navbar component props was empty becuase the route is present outside the navbar component
// withRouter : send the props to the higher order component