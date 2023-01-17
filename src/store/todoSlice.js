import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        data: []
    },
    reducers: {
        createTodo(state, action) {
            state.data.push({
                id: Date.now(),
                name: action.payload.name,
                checked: false,
                created_at: new Date().toDateString()
            });
        },
        removeTodo(state, action) {
            const { id } = action.payload;

            state.data = state.data.filter((todo) => todo.id !== id);

            return state;
        },
        toggleCheckedTodo(state, action) {
            const { id } = action.payload;

            state.data = state.data.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        checked: !todo.checked
                    }
                }

                return todo;
            })

            return state;
        }
    }
});

export const { removeTodo, createTodo, toggleCheckedTodo } = todoSlice.actions;

export default todoSlice.reducer;