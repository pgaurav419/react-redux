import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

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
                    className="border mx-auto my-auto border-black"
                    type="text"
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                />
                <button className="mx" type="submit">Add Todo</button>
            </form>
        </>
    )
}

export default AddTodo;