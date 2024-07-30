
import './App.css';
import React from 'react';
import { Container, CssBaseline, Typography, Paper } from '@mui/material';
import Tabs from './components/Tabs';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <Container component="main" maxWidth="sm" style={{ marginTop: '40px' }}>
        <CssBaseline />
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h4" component="h1" gutterBottom>
            TODO App
          </Typography>
          <Tabs />
          <TodoList />
        </Paper>
      </Container>
    </div>
  );
}

export default App;
