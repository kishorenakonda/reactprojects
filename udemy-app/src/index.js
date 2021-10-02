import React from 'react';
import ReactDOM from 'react-dom';

// A component is a Function or Class that produces HTML to show user using JSX
// and handles feedback from the user using event handlers

// const App = function () {
//     return (
//         <div> Hi Inside React App !! </div>
//     )
// }

const FatApp = () => {
    return (
        <div> Function Using Fat Array </div>
    )
}

ReactDOM.render(
    // <App />,
    <FatApp />,
    document.querySelector('#root')
)