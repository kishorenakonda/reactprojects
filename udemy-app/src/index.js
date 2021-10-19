import React from 'react';
import ReactDOM from 'react-dom';
import profile1 from './images/kishore_img_1.jpeg';
import profile2 from './images/kishore_img_2.jpeg';
import profile3 from './images/kishore_img_3.jpg';

import SingleComment from './components/SingleComment';
import UserCard from './components/UserCard';
import Hemisphere from './components/Hemisphere';
import HandlingForms from './components/HandlingForms';

// A component is a Function or Class that produces HTML to show user using JSX
// and handles feedback from the user using event handlers

function getButtonText() {
    return 'Button FN';
}

const App = function () {
    const clickMeText = "click me";  // button with value click me
    const submitText = "submit";    // button with value submit
    const text = [5, 12];           // button with value 512 -> String concatenation happens
    const stringArray = ['hello', 'world']; // button with value `helloworld` -> Array Concatenation also happens
    const objText = { text: 'obj text submit' };
    const buttonText = "Hello";
    const customStyle = { backgroundColor: 'red', color: 'white' };

    return (
        <div>
            {/* `for` is a js variable , so for in JSX throws error , instead we can use `htmlFor` in reactjs  */}
            <label htmlFor="name" className="label"> Enter Name </label>
            <input id="name" type="text" />
            <button style={customStyle}>
                {/* {false ? clickMeText : submitText}  */}
                {/* {getButtonText()} */}
                {/* {text} */}
                {/* {stringArray} */}
                {objText.text}
                {/* {buttonText} */}
            </button>
        </div>
    )
}

const CommentsApp = function () {
    return (
        <div className="ui comments">
            <UserCard>
                {/* Externalizing component -> Component Nesting */}
                <SingleComment name="Kishore" date="Today at 5:00 PM" text="First Comment" picture={profile1}></SingleComment>
            </UserCard>

            <UserCard>
                <SingleComment name="Kumar" date="Today at 6:00 PM" text="Second Comment" picture={profile2}></SingleComment>
            </UserCard>

            {/* Directly written component */}
            <div className="comment">
                <a href="/" className="avatar">
                    <img src={profile3} alt="profile_pic"></img>
                </a>

                <div className="content">
                    <a href="/" className="author"> KK </a>

                    <div className="metadata">
                        <span className="date">
                            Today at 7:00 PM
                        </span>
                    </div>

                    <div className="text">
                        Third Comment
                    </div>
                </div>
            </div>
        </div>
    )
}

const LocationApp = () => {
    window.navigator.geolocation.getCurrentPosition(
        (position) => {
            console.log("position", position);
        },
        (error) => {
            console.error("error", error);
        }
    );

    return (
        <div> Location App </div>
    )
}

class LocationClassApp extends React.Component {

    // Since we are declaring state outside, we dont need constructor anymore
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         latitude: null,
    //         longitude: null,
    //         errorMessage: ''
    //     }
    //     // this.getInvokeFromConstructor();
    // }

    state = { latitude: null, errorMessage: '' };

    getInvokeFromConstructor() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log("position", position);
                // Whever React sees / senses this.setState -> It will render the DOM
                this.setState({ latitude: position.coords.latitude });
            },
            (error) => {
                console.error("error", error);
                this.setState({ errorMessage: error.message });
            }
        );
    }

    // It can be used if needed
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log("position", position);
                // Whever React sees / senses this.setState -> It will render the DOM
                this.setState({ latitude: position.coords.latitude });
            },
            (error) => {
                console.error("error", error);
                this.setState({ errorMessage: error.message });
            }
        );
    }

    // componentDidUpdate() {
    //     console.log("component Did Update Invoked");
    // }

    render() {
        // Commenting this since for every time this render happens
        // window.navigator.geolocation.getCurrentPosition(
        //     (position) => {
        //         console.log("position", position);
        //     },
        //     (error) => {
        //         console.error("error", error);
        //     }
        // );

        // Commenting this for testing on the conditional Rendering
        // return (
        //     <div>
        //         From LocationClass App
        //         <div>
        //             latitude : {this.state.latitude}
        //         </div>

        //         <div>
        //             Error : {this.state.errorMessage}
        //         </div>
        //     </div>
        // )

        // Conditional Rendering
        if (this.state.errorMessage && !this.state.latitude) {
            return (
                <div> Error Message : {this.state.errorMessage} </div>
            )
        } else if (!this.state.errorMessage && this.state.latitude) {
            return (
                // <div> Latitude : {this.state.latitude} </div>
                <div> <Hemisphere latitude={this.state.latitude}></Hemisphere> </div>
            )
        } else {
            return (
                <div> Loading ... </div>
            )
        }
    }
}

ReactDOM.render(
    // <App />,
    // <CommentsApp />,
    // <LocationApp />,
    // <LocationClassApp />,
    <HandlingForms />,
    document.querySelector('#root')
)