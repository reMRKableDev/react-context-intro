import React, { Component } from "react";

export default class Guest extends Component {
  render() {
    return (
      <article>
        <p>{this.props.guest.name}</p>
        <p>{this.props.guest.email}</p>
      </article>
    );
  }
}
