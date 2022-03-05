import React from "react";
import { Form } from "react-redux";

class Test extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handlleClick = () => {
    this.setState({
      count: count + 1,
    });
  };

  handleSubmit = (e) => {
    name: event.target.value;
  };

  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={() => this.handleClick()}>Count</button>
        <Form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            name="name"
            innerRef={(input) => (this.name = input)}
          />
        </Form>
      </div>
    );
  }
}

export const baseUrl = "https://jsonplaceholder.typicode.com/todos/1";
