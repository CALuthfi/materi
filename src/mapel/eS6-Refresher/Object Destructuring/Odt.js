import React, { Component } from "react";

export default class Odt extends Component {
  render() {
    const address = {
      street: "semarang",
      city: "",
      country: ""
    };

    const { street: st } = address;
    console.log(st);
    return (
      <div>
        <p>hai</p>
      </div>
    );
  }
}
