import React from "react";

interface I_Props {
  name: string;
  add?: () => void;
}

class Group extends React.Component<I_Props> {
  render() {
    return (
      <div style={{ display: "flex" }}>
        <li>{this.props.name}</li>
        <button onClick={this.props.add}>+</button>
      </div>
    );
  }
}

export default Group;
