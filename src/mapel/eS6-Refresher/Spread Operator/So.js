import React, { Component } from "react";

export default class So extends Component {
  render() {
    const firsst = { name: "luthfi" };
    const second = { job: "semarang" };

    const combined = { ...firsst, ...second, location: "semarang" };
    console.log(combined);
    return (
      <div>
        <p>hii</p>
      </div>
    );
  }
}
