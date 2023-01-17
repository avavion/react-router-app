import React from 'react'
import formatDate from '../../../utils/formatDate'
import { useDispatch } from 'react-redux'
import { toggleCheckedTodo, removeTodo } from '../../../store/todoSlice';

const Todo = ({ todo }) => {
    const dispatch = useDispatch();

    const toggleHandle = (id) => dispatch(toggleCheckedTodo({ id }))
    const removeHandle = (id) => dispatch(removeTodo({ id }));

    return (
        <div>
            <div>
                <h2>{todo.name}</h2>
                <h2>{formatDate(todo.created_at)}</h2>
                <button onClick={() => toggleHandle(todo.id)}>
                    {todo.checked ? "Не выполнено" : 'Выполнено'}
                </button>

                <button onClick={() => removeHandle(todo.id)}>
                    Remove by id {todo.id}
                </button>
            </div>
        </div>
    )
}

export default Todo