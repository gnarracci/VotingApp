import React, { Component } from "react";
import api from "../service/api";

export default class App extends Component {
  async componentDidMount() {
    const result = await api.call("post", "auth/signin", {
      email: "gnarracci@gmail.com",
      password: "password",
    });

    console.log(result);
  }
  render() {
    return <div>App Works!</div>;
  }
}
