import React from 'react'

class AddTodo extends React.Component {
    state = {
        title: ''
    }

    handleOnChange = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleAddTodo = () => {
        const todo = {
            id: this.props.todos.length,
            title: this.state.title
        }
        this.props.addTodo(todo);
        this.setState({
            title: ''
        })
    }

    render() {
        return (
            <div>
                <input type='text' value={this.state.title}
                    onChange={(event) => this.handleOnChange(event)}/>
                <button type="button"
                    onClick={() => this.handleAddTodo()}
                >Add</button>
            </div>

        )
    }

}

export default AddTodo