import React from "react";

class Addnew extends React.Component {
    state = {
        name: '',
    }
    handleChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleAdd = () => {
        const addNew = {
            id: this.props.items.length,
            name: this.state.name,
        }
        this.props.onAdd(addNew);
        this.setState({
            name: ''
        })
    }

    render() {
        return(
            <div>
                <input type="text" value={this.state.name}
                    onChange={this.handleChange}/>
                <button onClick={this.handleAdd}>Add</button>
            </div>
        )
    }
}

class ProfileForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
           items: [],
           isLoading: false,
           searchName: ''
        }
    }

    componentDidMount() {
        fetch('https://rjs101xbackend.herokuapp.com/')
            .then(res => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    isLoading: true
                })
            })
    }

    onAdd = (addNew) => {
        this.setState({
            items: [...this.state.items, addNew]
        })
    }

    handleOnSearch = (event) => {
        this.setState({
            searchName: event.target.value
        })
    }

    handleSearch = () => {
        // const searchName = this.search.value
        this.setState({
            items: this.state.items.filter(item => item.name.toLowerCase().includes(this.state.searchName.toLowerCase()))
        })
    }

    render() {
        if(!this.state.isLoading) 
            return (
                <div>
                    <h1>Pls wait some time...</h1>
                </div>
            )
        const listItem = this.state.items.map((item , index) => {
            return(
                <div key={item.id}>
                    <span>
                        {index + 1} - {item.name}
                    </span>

                </div>
            )
        })
        const SearchItem = () => {
            return(
                <div>
                    <input type="text" value={this.state.searchName}
                    onChange={this.handleOnSearch}/>
                    <button type="button" onClick={this.handleSearch}>Tìm</button>
                </div>
            )
        }
        console.log(listItem)
        return(
            <div>
            <Addnew onAdd={this.onAdd} items={this.state.items}/>
            <SearchItem />
            <h1>Fetch API</h1>
            {listItem}
            </div>
        )
    }
}

export default ProfileForm;