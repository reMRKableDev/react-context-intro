import React, { Component } from "react";

export default class Guest extends Component {
  render() {
    return (
      <article className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-gray-800 transition-transform transform hover:scale-105 duration-300">
        <p className="text-lg font-semibold">{this.props.guest.name}</p>
        <p className="text-gray-600">{this.props.guest.email}</p>
      </article>
    );
  }
}
