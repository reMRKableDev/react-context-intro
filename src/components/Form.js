import React, { Component } from "react";
import { GuestContext } from "../contexts/GuestContext";

export default class Form extends Component {
  render() {
    return (
      // reading the context
      <GuestContext.Consumer>
        {(guestContext) => {
          // extracting context values
          const { name, email, handleInputChange, handleSubmitForm } =
            guestContext;

          return (
            <form onSubmit={handleSubmitForm}>
              <label htmlFor="name">Name</label> <br />
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleInputChange}
              />
              <br />
              <label htmlFor="email">Email</label> <br />
              <input
                type="text"
                name="email"
                value={email}
                onChange={handleInputChange}
              />
              <br />
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                type="submit"
              >
                Add Guest
              </button>
            </form>
          );
        }}
      </GuestContext.Consumer>
    );
  }
}
