import React from "react";
import "./App.scss";
import VoteSample from "./components/VoteSample/VoteSample";

// import { Provider } from "./context/context";

class App extends React.Component {
  // state = {
  //   total: 123
  // };

  render() {
    return (
      // <Provider value={this.state.total}>
      <div>
        <VoteSample />
      </div>
      // </Provider>
    );
  }
}

export default App;
