import { Link } from "react-router-dom";
import "./Main.css";
const Main = props => {
  const delt = _id => {
    console.log(_id);
    props.delete(_id);
  };
  const edit = id => {
    props.editHandler(id);
    props.history.push("/edit");
  };
  const prod = props.products.map((product, i) => {
    // const random = Math.floor(Math.random() * 6) + 1;
    const random = (i % 5) + 1;
    return (
      <tr key={i}>
        {/* <th scope="row">{product._id}</th> */}
        <td>{product.hostname}</td>
        <td>{product.address}</td>
        <td>{product.city}</td>
        <td>
          <img src={`images/${random}.jpg`} />
        </td>
        <td>
          <button
            type="button"
            className="btn btn-info"
            onClick={() => {
              edit(product._id);
            }}
          >
            {props.iseditable ? "Update" : "Edit"}
          </button>
        </td>
        <td>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              delt(product._id);
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
      <Link to="/add">
        <button type="button" className="btn btn-success">
          Add
        </button>
      </Link>
      {/* <Add addProduct={this.addHandler} editProduct={this.editHandler} /> */}
    </>
  );
};

export default Main;
