import React, { Component } from "react";

export default class Cl extends Component {
  render() {
    class person {
      constroctor(name) {
        this.name = name;
      }
      walk() {
        console.log("walk");
      }
    }

    const person = new person("talenta");
    console.log(person.name);
    return (
      <div>
        <p>saya</p>
      </div>
    );
  }
}
