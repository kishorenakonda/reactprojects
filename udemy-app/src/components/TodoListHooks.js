import React, { useEffect, useState } from "react";
import AddNewTodo from "./AddNewTodo";

const TodoListHooks = () => {
    const [todos, setTodos] = useState([
        { text: 'Paybills', id: 1 },
        { text: 'Do Your homework', id: 2 },
        { text: 'Feed the dog', id: 3 }
    ]);

    const [count, setCount] = useState(0);

    const addTodo = (text) => {
        setTodos([
            ...todos,
            // { text: 'Learn hooks ' + Math.random(), id: Math.random() }
            { text, id: Math.random() }
        ]);
    }

    useEffect(() => {
        console.log("use effect", todos);
    }, [todos]);

    useEffect(() => {
        console.log("use effect", count);
    }, [count]);

    return (
        <div>
            <ul>
                {/* <li> Pay Bills </li>
                <li> Do You Homework </li>
                <li> Feed the Dog </li> */}
                {
                    todos.map((todo) => {
                        return (
                            <li key={todo.id}> {todo.text} </li>
                        )
                    })
                }
            </ul>
            {/* <button className="" onClick={addTodo}> Add a todo </button> */}
            <AddNewTodo addTodo={addTodo}></AddNewTodo>
            <button className="" onClick={() => setCount(count + 1)}> Score : {count} </button>
        </div>
    )
}

export default TodoListHooks;