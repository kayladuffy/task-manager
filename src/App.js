import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import TodoList from './TodoList/todoList';
import AddTodo from './AddTodo/addTodo';
import Navbar from '../src/Navbar/Navbar';
import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todos: []
    };
  }
  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
         <Navbar />
        </div>
      </BrowserRouter>
    );
  }

  render() {
    return (
      <div>
        <AddTodo addTodoFn={this.addTodo}></AddTodo>
        <TodoList updateTodoFn={this.updateTodo}todos={this.state.todos}></TodoList>
      </div>
    );
  }

  componentDidMount = () => {
    const todos = localStorage.getItem('todos');
    if (todos) {
      const savedTodos = JSON.parse(todos);
      this.setState({ todos: savedTodos });
    } else {
      console.log('No todos');
    }
  }

  addTodo = async (todo) => {
    await this.setState({todos: [...this.state.todos, {
      text: todo,
      completed: false
    }] });
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
    console.log(localStorage.getItem('todos'));
  }

  updateTodo = async (todo) => {
    const newTodos = this.state.todos.map(_todo => {
      if(todo === _todo)
      return {
        text: todo.text,
        completed: !todo.completed
      }
      else
        return _todo
    });
    await this.setState({ todos: newTodos });
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
  } 

}
  export default App;
