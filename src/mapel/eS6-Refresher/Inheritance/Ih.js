import React, { Component } from "react";

export default class Ih extends Component {
  render() {
    class person {
      constructor(name) {
        this.name = name;
      }
      walk() {
        console.log("walk");
      }
    }

    class siswa extends person {
      constructor(name, degree) {
        super(name);
        this.degree = degree;
      }
      teach() {
        console.log("teach");
      }
    }
    const teacer = new teacer("Mosh", "itu");
    console.log(siswa);
    return (
      <div>
        <p>luthfi</p>
      </div>
    );
  }
}
