import React, { Component } from "react";

export default class Bindingthis extends Component {
  render() {
    const person = {
      name: "Mosh",
      walk() {
        console.log(this);
      }
    };

    person.walk();

    const walk = person.walk.bind(person);
    walk();

    return (
      <div>
        <p>hello</p>
      </div>
    );
  }
}
