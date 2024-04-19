import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import DeleteTodo from './components/DeleteTodo';
import EditTodo from './components/EditTodo';
import ProLicense from './components/ProLicense';

function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Login} />
        <Route path="/todos" exact component={TodoList} />
        <Route path="/add" exact component={AddTodo} />
        <Route path="/delete" exact component={DeleteTodo} />
        <Route path="/edit" exact component={EditTodo} />
        <Route path="/pro" exact component={ProLicense} />
      </div>
    </Router>
  );
}

export default App;
