import React from "react";
import { Link } from "react-router-dom";

export default class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      name: "",
      surname: "",
      role: "USR",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div className="bg-gray-50 flex flex-col  items-center h-screen">
        <div className="text-center text-4xl  p-16 text-red-400">Razjo</div>

        <div className="p-8 bg-white shadow-lg lg:w-3/12 w-10/12 rounded">
          <div className="text-center pb-8">Sign in to Razjo</div>
          <div className="lg:mx-4 mx-2 pb-4">
            <input
              type="text"
              className="focus:outline-none w-full focus:border-red-400 border-b-2 "
              placeholder="Enter your email"
              onChange={this.handleChange}
              id="email"
            />
          </div>
          <div className="lg:mx-4 mx-2 mb-4">
            <input
              type="text"
              className="focus:outline-none w-full focus:border-red-400 border-b-2 "
              placeholder="Enter your password"
              id="password"
              onChange={this.handleChange}
            />
          </div>
          <div className="lg:mx-4 mx-2 mb-4">
            <input
              type="text"
              className="focus:outline-none w-full focus:border-red-400 border-b-2 "
              placeholder="Enter your name"
              id="name"
              onChange={this.handleChange}
            />
          </div>
          <div className="lg:mx-4 mx-2 mb-4">
            <input
              type="text"
              className="focus:outline-none w-full focus:border-red-400 border-b-2 "
              placeholder="Enter your surname"
              id="surname"
              onChange={this.handleChange}
            />
          </div>
          <div
            className="text-center bg-red-400 text-white p-2 mx-2 lg:mx-4 rounded shadow"
            onClick={this.handleSubmit}
          >
            Sign in
          </div>
          <div className="text-sm flex justify-center my-1 text-gray-400">
            <span>
              <Link to="/login">Already have an account?</Link>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
