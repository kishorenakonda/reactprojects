import React from "react";
import ContextNavbar from "./ContextNavbar";
import TodoList from "./TodoList";
import "../css/ContextApiApp.css";
import ThemeContextProvider from "../contexts/ThemeContext";
import AuthContextProvider from "../contexts/AuthContext";

function ContextApiApp() {
    return (
        <div className="App">
            <div className="ui raised very padded text container segment">
                <AuthContextProvider>
                    <ThemeContextProvider>
                        <ContextNavbar></ContextNavbar>
                        <TodoList></TodoList>
                    </ThemeContextProvider>
                </AuthContextProvider>
            </div>
        </div>
    )
}

export default ContextApiApp;