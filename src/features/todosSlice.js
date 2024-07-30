import { createSlice, configureStore } from '@reduxjs/toolkit';

const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        tabs: {
            tab1: [],
            tab2: [],
            tab3: []
        },
        activeTab: 'tab1'
    },
    reducers: {
        addTodo: (state, action) => {
            state.tabs[state.activeTab].push(action.payload);
        },
        removeTodo: (state, action) => {
            state.tabs[state.activeTab] = state.tabs[state.activeTab].filter(todo => todo.id !== action.payload);
        },
        setActiveTab: (state, action) => {
            state.activeTab = action.payload;
        }
    }
});

export const { addTodo, removeTodo, setActiveTab } = todosSlice.actions;

export const store = configureStore({
    reducer: {
        todos: todosSlice.reducer
    }
});
