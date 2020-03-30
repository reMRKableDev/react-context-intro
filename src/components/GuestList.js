import React, { Component } from "react";
import Guest from "./Guest";
import { GuestContext } from "../contexts/GuestContext";

export default class GuestList extends Component {
  static contextType = GuestContext; // reading the context

  render() {
    const { guestList } = this.context; // extracting context values
    return guestList.map((guest, index) => <Guest key={index} guest={guest} />);
  }
}
