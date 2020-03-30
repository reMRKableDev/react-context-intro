import React, { Component, createContext } from "react";

export const GuestContext = createContext();

export default class GuestContextProvider extends Component {
  state = {
    name: "",
    email: "",
    guestList: [
      { name: "Wildo Coda", email: "wildo@coda.com" },
      { name: "Wildy Coda", email: "wildo@coda.com" },
      { name: "Wilder Coda", email: "wildo@coda.com" }
    ]
  };

  // handle incoming input
  handleInputChange = e => this.setState({ [e.target.name]: e.target.value });

  // handle submitting form
  handleSubmitForm = e => {
    e.preventDefault();

    const newGuest = {
      name: this.state.name,
      email: this.state.email
    };

    this.setState({
      guestList: [...this.state.guestList, newGuest],
      name: "",
      email: ""
    });
  };

  render() {
    const contextValues = {
      ...this.state,
      handleInputChange: this.handleInputChange,
      handleSubmitForm: this.handleSubmitForm
    };
    return (
      <GuestContext.Provider value={contextValues}>
        {this.props.children}
      </GuestContext.Provider>
    );
  }
}
