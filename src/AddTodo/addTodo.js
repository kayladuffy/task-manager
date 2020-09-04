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
        <div className="container">  
            <div className='addTodoContainer'>
                <form  onSubmit={(e) => this.submitTodo(e)} >
                    <input className="placeholder" id='addTodoInput' onChange={(e) => this.updateInput(e)} type='text' placeholder="Type new todo here"></input>
                    <button className="btn pick lighten-1 z-depth-0" type='submit'>Submit Todo Item</button>
                </form>
            </div>
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