import React from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";

// -- Context Provider --
// class ContextNavbar extends React.Component {
//     static contextType = ThemeContext;
//     render() {
//         const { isDarkTheme, darkTheme, lightTheme } = this.context;
//         const theme = isDarkTheme ? darkTheme : lightTheme;

//         return (
//             <nav style={{ background: theme.background, color: theme.text, height: '120px' }}>
//                 <h2 style={{ textAlign: 'center' }}>
//                     Udemy
//                 </h2>
//                 <div className="ui three buttons">
//                     <button className="ui button"> Overview </button>
//                     <button className="ui button"> Contact </button>
//                     <button className="ui button"> Support </button>
//                 </div>
//             </nav>
//         )
//     }
// }

// -- Context Provider with Context Consumer --
class ContextNavbar extends React.Component {
    render() {
        return (
            <AuthContext.Consumer>{(authContext) => {
                return (
                    <ThemeContext.Consumer>{(themeContext) => {
                        const { isDarkTheme, darkTheme, lightTheme } = themeContext;
                        const theme = isDarkTheme ? darkTheme : lightTheme;

                        const { isLoggedIn, changeAuthStatus } = authContext;

                        return (
                            <nav style={{ background: theme.background, color: theme.text, height: '120px', textAlign: 'center' }}>
                                <h2 style={{ textAlign: 'center' }}>
                                    Udemy
                                </h2>

                                <p onClick={changeAuthStatus}> User is : {isLoggedIn ? 'Logged In' : 'Logged Out'} </p>

                                <div className="ui three buttons">
                                    <button className="ui button"> Overview </button>
                                    <button className="ui button"> Contact </button>
                                    <button className="ui button"> Support </button>
                                </div>
                            </nav>
                        )
                    }}
                    </ThemeContext.Consumer>
                )
            }}
            </AuthContext.Consumer>
        )
    }
}

export default ContextNavbar;