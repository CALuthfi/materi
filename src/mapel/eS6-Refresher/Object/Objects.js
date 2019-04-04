import React, { Component } from "react";

export default class Objects extends Component {
  render() {
    const person = {
      name: "mosh",
      wlak() {},
      talk() {}
    };

    person.talk();

    person.name = "";

    const targetMember = "";
    person[targetMember.value] = "John";
    return <div />;
  }
}
