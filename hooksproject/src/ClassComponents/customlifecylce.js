import React, { Component } from "react";

export class Customlifecylce extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("static method");
    return null;
  }

  increment = () => this.setState({ counter: this.state.counter + 1 });
  decrement = () => this.setState({ counter: this.state.counter - 1 });

  componentDidMount() {
    console.log("component Did mount");
    console.log("-----------------");
  }

  render() {
    console.log("Render");
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            gap: "20px",
          }}
        >
          <button onClick={this.increment}>increment</button>
          <button onClick={this.decrement}>decrement</button>
        </div>
        <div className="counter">
          <h1>counter : {this.state.counter}</h1>
        </div>
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    console.log("component did update");
    console.log("-------------------");
  }

  componentWillUnmount() {
    console.log("Component will unmount");
    console.log("-----------------");
  }
}

export default Customlifecylce;
