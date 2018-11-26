import React, { Component } from "react";
import { Consumer } from "../../context";
import uuid from "uuid";

class AddContact extends Component {
  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    };
    console.log(contact);
  };
  static defaultProps = {
    name: "harat malli",
    email: "harat@gmail.com",
    phone: "111-111-1111"
  };

  render() {
    const { name, email, phone } = this.props;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contacts</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <div className="form-group mb-3">
                    <label htmlFor="name"> Name</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      name="name"
                      id=""
                      placeholder="Enter Name..."
                      defaultValue={name}
                      ref={this.nameInput}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="email"> Email</label>
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      name="email"
                      id=""
                      placeholder="Enter Email..."
                      defaultValue={email}
                      ref={this.emailInput}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="phone"> Phone</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      name="phone"
                      id=""
                      placeholder="Enter Phone..."
                      defaultValue={phone}
                      ref={this.phoneInput}
                    />
                  </div>
                  <input type="submit" className="btn btn-light btn-block" />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default AddContact;
