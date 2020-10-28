import React, { Component } from "react";
import { connect } from "react-redux";

import { authUser, logout } from "../store/actions";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    const { email, password } = this.state;
    const { authType } = this.props;
    e.preventDefault();

    this.props.authUser(authType || "signin", { email, password });
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            autoComplete="off"
            autoFocus="on"
            type="email"
            value={email}
            onChange={this.handleChange}
          />
          <label htmlFor="password">Contraseña</label>
          <input
            name="password"
            autoComplete="off"
            type="password"
            value={password}
            onChange={this.handleChange}
          />
          <button type="submit">Signin</button>
        </form>
      </div>
    );
  }
}

export default connect(() => ({}), { authUser, logout })(Auth);
