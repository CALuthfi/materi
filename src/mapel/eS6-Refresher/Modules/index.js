import React, { Component } from "react";
import { Promoted, Teacher } from "./teacher";
export default class index extends Component {
  render() {
    const teacher = new Teacher("Mosh", "siswa");
    teacher.teach();
    return (
      <div>
        <p>saya</p>
      </div>
    );
  }
}
