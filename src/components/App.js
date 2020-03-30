import React, { Component } from "react";
import "../index.css";

import GuestList from "./GuestList";
import Form from "./Form";
import GuestContextProvider from "../contexts/GuestContext";

export default class App extends Component {
  render() {
    return (
      <section className="App">
        <h1>Guest List</h1>
        <GuestContextProvider>
          <GuestList />
          <Form />
        </GuestContextProvider>
      </section>
    );
  }
}
