import "./App.css";
// import { Customlifecylce } from "./ClassComponents/customlifecylce";
// import Theme from "./Components/Theme";
// import UseEffecthook from "./Components/UseEffecthook";

// function App() {
//   return (
//     <div className="App">
//       {/* <Theme />
//       <UseEffecthook /> */}
//       <Customlifecylce />
//     </div>
//   );
// }

// export default App;

import React, { Component } from "react";
import Customlifecylce from "./ClassComponents/customlifecylce";
import Input from "./functionComponents/input";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mount: true,
    };
    this.mountCounter = () => this.setState({ mount: true });
    this.unmountCounter = () => this.setState({ mount: false });
  }
  render() {
    return (
      <div className="App">
        <Input />
        <div className="Mount">
          <button onClick={this.mountCounter} disabled={this.state.mount}>
            Mount Counter
          </button>
          <button onClick={this.unmountCounter} disabled={!this.state.mount}>
            Unmount Counter
          </button>
        </div>
        {this.state.mount ? <Customlifecylce /> : null}
      </div>
    );
  }
}

export default App;
