import React, { Component } from "react";
import Guest from "./Guest";
import { GuestContext } from "../contexts/GuestContext";

export default class GuestList extends Component {
  static contextType = GuestContext;

  render() {
    const { guestList } = this.context;

    return (
      <div className="flex flex-col gap-4 mt-4">
        {guestList.map((guest, index) => (
          <div key={index} className="animate-fadeIn">
            <Guest guest={guest} />
          </div>
        ))}
      </div>
    );
  }
}
