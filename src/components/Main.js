import React, { Component } from "react";
import Add from "./Add";
import "./Main.css";
class Main extends Component {
  state = {
    products: [
      {
        id: 1,
        HostName: "Mahmoud",
        Address: "suez canal",
        City: "Mansoura",
      },
      {
        id: 2,
        HostName: "Yehia",
        Address: "Mohandseen",
        City: "Cairo",
      },
    ],
    btn: {
      iseditable: false,
      editIndex: "",
    },
  };

  edit = i => {
    console.log(this.state.btn.editIndex);

    this.setState({
      btn: { iseditable: !this.state.btn.iseditable, editIndex: i },
    });
  };
  editHandler = newProduct => {
    if (this.state.btn.iseditable) {
      const editProduct = this.state.products.filter(p => {
        return this.state.products.indexOf(p) === this.state.btn.editId;
      });
      // const index = this.state.products.indexOf(editProduct);
      console.log(this.state.btn.editIndex);

      console.log(editProduct);
      const newProducts = this.state.products.splice(
        this.state.btn.editIndex,
        1,
        newProduct
      );
      console.log(newProducts);
      this.setState({ products: [...this.state.products] });
    }
  };
  delete = id => {
    const filteredProducts = this.state.products.filter(product => {
      return product.id !== id;
    });
    this.setState({ products: filteredProducts });
  };
  addHandler = newProduct => {
    const newProducts = [...this.state.products, newProduct];

    this.setState({ products: newProducts });
  };

  render() {
    const prod = this.state.products.map((product, i) => {
      return (
        <tr key={i}>
          <th scope="row">{product.id}</th>
          <td>{product.HostName}</td>
          <td>{product.Address}</td>
          <td>{product.City}</td>
          <td>
            <img src={`images/${product.id}.jpg`} />
          </td>
          <td>
            <button
              type="button"
              className="btn btn-info"
              onClick={() => {
                this.edit(i);
              }}
            >
              {this.state.btn.iseditable ? "Update" : "Edit"}
            </button>
          </td>
          <td>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => {
                this.delete(product.id);
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
    return (
      <>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">HostName</th>
              <th scope="col">Address</th>
              <th scope="col">City</th>
              <th scope="col">Images</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>{prod}</tbody>
        </table>
        <Add addProduct={this.addHandler} editProduct={this.editHandler} />
      </>
    );
  }
}
export default Main;
