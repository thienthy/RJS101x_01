import React from 'react';
// import AddTodo from './AddComponent';
// import { Modal, ModalBody, ModalHeader} from 'reactstrap';

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
        return(
            <div>
                <input type="text" value={this.state.title}
                onChange={this.handleOnChange}/>
                <button onClick={this.handleAddTodo}>Add</button>
            </div>
        )
    }
}

class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            todos: [
                { id: 'todo1', title: 'Doing homework'},
                { id: 'todo2', title: 'Making videos'},
                { id: 'todo3', title: 'Fixing bugs'}
            ],
            openModal: false,
            searchName: ""
        }
    }

    // componentDidMount = () => {
    //     this.setState({
    //         count: 15
    //     })
    // }
    // componentDidUpdate() {
    //     console.log("Click: " + this.state.count);
    //   }
    toggleModal = () => {
        this.setState({
            openModal: !this.state.openModal
        })
    }

    // handleIncrease = () => {
    //     this.setState({
    //         count: this.state.count + 1
    //     })
    // }

    // handleDecrease = () => {
    //     this.setState({
    //         count: this.state.count - 1
    //     })
    // }

    addTodo = (todo) => {
        this.setState({
            todos: [...this.state.todos, todo]
        })
    }

    handleDeleteTodo = (todo) => {
        let currentTodos = this.state.todos;
        currentTodos = currentTodos.filter(item => item.id !== todo.id)
        this.setState({
            todos: currentTodos
        })
    }

    
    handleOnSearch = (event) => {
        this.setState({
            searchName: event.target.value,
        })
    }

    handleSearch = () => {
        this.setState({
            todos: this.state.todos.filter(item => item.title.toLowerCase().includes(this.state.searchName.toLowerCase()))
        })
    }

    render() {
        const listToDo = this.state.todos.map((item, index) => {
            return(
                <div key={item.id}>
                    <span>
                        {index + 1} - {item.title}
                    </span>
                    <button type="button"
                        onClick={() => this.handleDeleteTodo(item)}
                    >Delete</button>
                </div>
                )
            })
        console.log(listToDo)
        console.log(this.state.todos)

        return(
            <div>
                {/* <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleIncrease}>Increase</button>
                <button onClick={this.handleDecrease}>Decrease</button> */}

                {/* <AddTodo addTodo={this.addTodo} todos={this.state.todos}/> */}
                <AddTodo addTodo={this.addTodo} todos={this.state.todos}/>

                    <input type="text" value={this.state.searchName} 
                        onChange={this.handleOnSearch}/>
                    <button type="submit" onClick={this.handleSearch}>Tim</button>

                {listToDo}

                {/* <button type="button" onClick={this.toggleModal}>+</button>
                <Modal isOpen={this.state.openModal} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Thêm nhân viên</ModalHeader>
                    <ModalBody>
                        ADD
                    </ModalBody>
                </Modal> */}
            </div>
        )
    }
}

export default Main;