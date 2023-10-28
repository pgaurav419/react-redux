import { useSelector } from "react-redux"

const Todo = () => {

    const todos = useSelector((state) => state.todo)
    console.log(todos)

    return (
        <div>
            kmdlk
            s
        </div>
    )
}

export default Todo