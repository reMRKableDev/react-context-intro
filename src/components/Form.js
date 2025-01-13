import React, { Component } from "react";
import { GuestContext } from "../contexts/GuestContext";

export default class Form extends Component {
  render() {
    return (
      <GuestContext.Consumer>
        {(guestContext) => {
          const { name, email, handleInputChange, handleSubmitForm } =
            guestContext;

          return (
            <form
              onSubmit={handleSubmitForm}
              className="flex flex-col gap-4 mt-4"
            >
              <div>
                <label htmlFor="name" className="text-gray-700 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-gray-700 font-medium">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
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
