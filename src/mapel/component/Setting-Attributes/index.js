import React, { Component } from "react";

export default class index extends Component {
  state = {
    count: 0
  };
  render() {
    return (
      <div>
        <span>{this.formatCount}</span>
        <button classname="btn btn-secondary btn-sm">daftar</button>
      </div>
    );
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "hero" : count;
  }
}
