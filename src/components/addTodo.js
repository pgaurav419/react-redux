import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, removeTodo } from "../features/todo/todoSlice";

function AddTodo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput("")
    }

    return (
        <>
            <form onSubmit={addTodoHandler}>
                <input
                    type="text"
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                />
                <button type="submit"></button>
            </form>
        </>
    )
}

export default AddTodo;