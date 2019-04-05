import React, { Component } from "react";

class Conter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      // Ajax
    }
  }

  componentWillUnmount() {
    console.log("Counter - Unmount");
  }
  render() {
    console.log("Counter - Redered");
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            class="btn btn-outline-secondary"
          >
            +
          </button>
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            class="btn btn-outline-warning m-2"
          >
            -
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            delete
          </button>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "bade m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}
export default Conter;
