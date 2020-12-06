import React, { Component } from "react";

class Add extends Component {
  state = {
    id: "",
    HostName: "",
    Address: "",
    City: "",
  };
  onAdd = e => {
    e.preventDefault();

    this.props.addProduct(this.state);
    this.props.editProduct(this.state);
    // this.props.history.push({
    //   pathname: "/",
    //   state: this.state,
    // });
  };
  handleChange = e => {
    return this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div>
        <div className="container mb-5">
          <form>
            <div className="form-row">
              <div className="form-group col-md-3">
                <label htmlFor="id">Id</label>
                <input
                  type="text"
                  className="form-control"
                  id="id"
                  name="id"
                  value={this.state.nameValue}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="hostName">Host Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="hostName"
                  name="HostName"
                  value={this.state.nameValue}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="inputAddress">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  name="Address"
                  value={this.state.addressValue}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="inputCity">City</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputCity"
                  name="City"
                  value={this.state.cityValue}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.onAdd}
            >
              Add
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Add;
