import React, { Component } from "react";

export default class ThethisKeyword extends Component {
  render() {
    const person = {
      name: "Mosh",
      walk() {
        console.log(this);
      }
    };

    person.walk();

    const walk = person.walk;
    walk();

    return (
      <div>
        <p>hello</p>
      </div>
    );
  }
}
