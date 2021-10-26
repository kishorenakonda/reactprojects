import React from "react";
import ContextNavbar from "./ContextNavbar";
import TodoList from "./TodoList";
import "../css/ContextApiApp.css";
import ThemeContextProvider from "../contexts/ThemeContext";

function ContextApiApp() {
    return (
        <div className="App">
            <div className="ui raised very padded text container segment">
                <ThemeContextProvider>
                    <ContextNavbar></ContextNavbar>
                    <TodoList></TodoList>
                </ThemeContextProvider>
            </div>
        </div>
    )
}

export default ContextApiApp;