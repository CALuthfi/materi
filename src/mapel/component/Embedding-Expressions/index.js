import React, { Component } from "react";

export default class index extends Component {
  state = { count: 0 };
  render() {
    return (
      <div>
        <sapn>{this.formatCount}</sapn>

        <button>dartar</button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "hero" : count;
  }
}
