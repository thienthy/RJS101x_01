import React from "react";
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}

class Test extends React.Component {
    constructor(props) {
        super(props);
    }

    increase = () => {
        this.props.dispatch({ type: 'INCREASE'})
    }

    decrease = () => {
        this.props.dispatch({ type: 'DECREASE'})
    }

    render() {
        return (
            <div>
                <button onClick={this.decrease}>Decrease</button>
                <span>{this.props.count}</span>
                <button onClick={this.increase}>Increase</button>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Test);

// class Addstaff extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             name: ''
//         }
//     }

//     handleOnChange = (event) => {
//         this.setState({
//             name: event.target.value
//         })
//     }

//     handleAddstaff = () => {
//         const newStaff = {
//             id: this.props.staffs.length,
//             name: this.state.name
//         }
//         this.props.onAddstaff(newStaff);
//         this.setState({
//             name: ''
//         })
//     }

//     render() {
//         return(
//             <div>
//                 <input type="text" value={this.state.name}
//                     onChange={(event) => this.handleOnChange(event)}/>
//                 <button onClick={() => this.handleAddstaff()}>Add</button>
//             </div>
//         )
//     }
// }

// class Test extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             items: [],
//             openModal: false,
//         }
//     }

//     componentDidMount() {
//         fetch('https://rjs101xbackend.herokuapp.com/')
//             .then(res => res.json())
//             .then((json) => {
//                 this.setState({
//                     items: json
//                 })
//             })
//     }

//     onAddstaff = (newStaff) => {
//         this.setState({
//             items: [...this.state.items, newStaff]
//         })
//     }

        
//     handleSearch = (e) => {
//         const searchName = this.search.value
//         console.log(searchName)
//         this.setState({
//             items: this.state.items.filter(item => item.name.toLowerCase().includes(searchName.toLowerCase()))
//         })
//     }

//     render() {
//         return(
//             <div className="App">
//                 <Addstaff onAddstaff={this.onAddstaff} staffs={this.state.items}/>
//                     <input type="text" ref={input => this.search = input}/>
//                     <button type="submit" onClick={this.handleSearch}>Tim</button>
//                 <h1>Fetch API</h1>
//                 {this.state.items.map((item, index) => {
//                     return(
//                         <div key={item.id}>
//                             {index +1} - {item.name}
//                         </div>
//                         )
//                     })
//                 }
//             </div>
//         )
//     }
// }

// export default Test;