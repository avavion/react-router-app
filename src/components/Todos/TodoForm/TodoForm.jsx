import { useState } from 'react'
import { createTodo } from '../../../store/todoSlice';
import { useDispatch } from 'react-redux';

const TodoForm = () => {
    const dispatch = useDispatch();

    const [value, setValue] = useState('');

    const onSubmitHandle = (e) => {
        e.preventDefault();

        dispatch(createTodo({ name: value }));
    }

    return (
        <div>
            <form onSubmit={(e) => onSubmitHandle(e)}>
                <h2>Добавить задачу:</h2>
                <input
                    type="text"
                    placeholder='Купить продукты'
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                />
            </form>
        </div>
    )
}

export default TodoForm