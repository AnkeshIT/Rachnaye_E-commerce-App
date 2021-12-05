import React, { Component } from "react";
import { Link } from "react-router-dom";
import withContext from "../ContextPages/withContext";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname:"",
      lastname:"",
      username: "",
      email:"",
      password: ""
    };
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value, error: "" });

  signup = (e) => {
    e.preventDefault();

    const { firstname,lastname, username,email, password } = this.state;
    if (!firstname || !lastname || !username || !email || !password) {
      return this.setState({ error: "Fill all fields!" });
    }
    this.props.context.signup(firstname, lastname, username, email, password)
      .then((signupIn) => {
        if (!signupIn) {
          this.setState({ error: "Invalid Credentails" });
        }
      })
  };

  render() {
    return !this.props.context.user ? (
      <>
        <div className="hero is-primary ">
          <div className="hero-body container">
            <h4 className="title">Sign Up</h4>
          </div>
        </div>
        <br />
        <br />
        <form onSubmit={this.signup}>
          <div className="columns is-mobile is-centered">
            <div className="column is-one-third">
            <div className="field">
                <label className="label">First Name: </label>
                <input
                  className="input"
                  type="text"
                  name="firstname"
                  onChange={this.handleChange}
                />
              </div>
              <div className="field">
                <label className="label">Last Name: </label>
                <input
                  className="input"
                  type="text"
                  name="lastname"
                  onChange={this.handleChange}
                />
              </div>
              <div className="field">
                <label className="label">Email: </label>
                <input
                  className="input"
                  type="email"
                  name="email"
                  onChange={this.handleChange}
                />
              </div>
              <div className="field">
                <label className="label">Username: </label>
                <input
                  className="input"
                  type="text"
                  name="username"
                  onChange={this.handleChange}
                />
              </div>
              <div className="field">
                <label className="label">Password: </label>
                <input
                  className="input"
                  type="password"
                  name="password"
                  onChange={this.handleChange}
                />
              </div>
              {this.state.error && (
                <div className="has-text-danger">{this.state.error}</div>
              )}
              <div className="field is-clearfix">
                <button
                  className="button is-primary is-outlined is-pulled-right"
                >
                  Create Account
                </button>
              </div>
            </div>
          </div>
        </form>
      </>
    ) : (
      <Link to="/signup" />
    );
  }
}

export default withContext(Signup);
