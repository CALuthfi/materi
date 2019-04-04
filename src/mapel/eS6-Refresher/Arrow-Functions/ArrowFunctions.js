import React, { Component } from "react";

export default class ArrowFunctions extends Component {
  render() {
    const square = function(number) {
      return number * number;
    };

    const square = number => number * number;
    console.log(square(5));
    // const jobs = [
    //   { id: 1, isActive: true },
    //   { id: 2, isActive: true },
    //   { id: 3, isActive: true }
    // ];

    // const activeJobs = jobs.filter(function(job) {
    //   return job.isActive;
    // });
    // const activeJobs = jobs.filter(job => job.isActive);
    return (
      <div>
        <p>hai</p>
      </div>
    );
  }
}
