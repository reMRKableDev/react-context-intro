import React, { Component } from "react";
import "../index.css";

import GuestList from "./GuestList";
import Form from "./Form";
import GuestContextProvider from "../contexts/GuestContext";

export default class App extends Component {
  render() {
    return (
      <section className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">Guest List</h1>
        <GuestContextProvider>
          <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
            <GuestList />
            <Form />
          </div>
        </GuestContextProvider>
      </section>
    );
  }
}
