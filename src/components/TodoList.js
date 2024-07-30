import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo } from '../features/todosSlice';
import { TextField, Button, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos.tabs[state.todos.activeTab]);
    const [newTodo, setNewTodo] = useState('');

    const handleAddTodo = () => {
        if (newTodo.trim()) {
            dispatch(addTodo({
                id: Date.now(),
                text: newTodo
            }));
            setNewTodo('');
        }
    };

    return (
        <div>
            <TextField
                label="Add new todo"
                variant="outlined"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                style={{ marginBottom: '16px' }}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={handleAddTodo}
                style={{ marginBottom: '16px' }}
            >
                Add
            </Button>
            <List>
                {todos.map(todo => (
                    <ListItem key={todo.id} secondaryAction={
                        <IconButton edge="end" aria-label="delete" onClick={() => dispatch(removeTodo(todo.id))}>
                            <DeleteIcon />
                        </IconButton>
                    }>
                        <ListItemText primary={todo.text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default TodoList;