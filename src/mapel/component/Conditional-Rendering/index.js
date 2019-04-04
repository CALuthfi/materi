import React, { Component } from "react";

export default class index extends Component {
  state = {
    count: 0,
    tags: []
  };

  renderTag() {
    if (this.state.tags.length === 0) return <p>theree tags!!!</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  render() {
    return (
      <div>
        {this.state.tags.length === 0 && "please new tag!!"}
        {this.renderTag()}
      </div>
    );
  }
}
