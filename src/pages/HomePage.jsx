import TodoForm from "../components/Todos/TodoForm/TodoForm"
import Todos from "../components/Todos/Todos"

const HomePage = () => {
    return (
        <section>
            <h2>Список задач:</h2>
            <TodoForm />
            <Todos />
        </section>
    )
}

export default HomePage