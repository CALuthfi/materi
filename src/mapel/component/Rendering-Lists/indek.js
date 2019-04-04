import React, { Component } from "react";

export default class indek extends Component {
  state = {
    count: 0,
    tags: ["list1", "list2", "list3"]
  };
  render() {
    return (
      <div>
        <span className="badge badge-primary m-2"> {this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm"> daftar</button>
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "ngoding  terus" : count;
  }
}
