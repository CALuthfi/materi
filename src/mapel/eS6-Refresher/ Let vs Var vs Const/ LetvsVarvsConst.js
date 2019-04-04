import React, { Component } from "react";

export default class LetvsVarvsConst extends Component {
  render() {
    for (var i = 0; i < 5; i++) {
      console.log(i);
    }

    return (
      <div>
        <h1>hello world</h1>
      </div>
    );
  }
}
