import React from 'react';
import '../TodoItem/style.css'


class AddTodo extends React.Component {

    constructor() {
        super();
        this.state = {
            todo: ''
        };
    }
    
    render() {
        return(
        <div className='addTodoContainer'>
            <form  onSubmit={(e) => this.submitTodo(e)} >
                <input id='addTodoInput' onChange={(e) => this.updateInput(e)} type='text'></input>
                <button id='add' type='submit'>Add Todo Item</button>
            </form>
        </div>
        );
    }

    updateInput = (e) => {
        this.setState({ todo: e.target.value })
    }
    submitTodo = (e) => {
        e.preventDefault();
        this.props.addTodoFn(this.state.todo);
        document.getElementById('addTodoInput').value = '';
    }
}

export default AddTodo;