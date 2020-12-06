import { useState } from "react";
const Add = props => {
  const [prod, setProd] = useState({
    // _id: "",
    hostname: "",
    address: "",
    city: "",
  });
  const [error, setError] = useState({
    hostnameError: "",
    addressError: "",
    cityError: "",
  });
  const handleChange = e => {
    return setProd({ ...prod, [e.target.name]: e.target.value });
  };
  const validation = () => {
    if (prod.hostname === "") {
      setError({ hostnameError: "host name empty" });

      return false;
    } else {
      console.log("ASD");
      setError({ hostnameError: "" });
      console.log(error);
    }
    if (prod.address === "") {
      setError({ addressError: "it  be empty" });
      console.log(prod);
      return false;
    } else {
      setError({ addressError: "" });
    }
    if (prod.city === "") {
      setError({ cityError: "it shoudnot be empty" });
      return false;
    } else {
      setError({ cityError: "" });
    }
    return true;
  };

  const onAdd = e => {
    e.preventDefault();
    let validate = validation();
    if (validate) {
      props.addProduct(prod);

      props.history.push("/");
      // handleChange();
    }
  };
  console.log("rerendered");
  return (
    <div>
      <div className="container mb-5">
        <form onSubmit={onAdd}>
          <div className="form-row">
            <div className="form-group col-md-3">
              <label htmlFor="hostName">Host Name</label>
              <input
                type="text"
                className="form-control"
                id="hostname"
                name="hostname"
                value={prod.hostname}
                onChange={handleChange}
              />
              <small style={{ color: "red" }}>{error.hostnameError}</small>
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="inputAddress">Address</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                name="address"
                value={prod.addressValue}
                onChange={handleChange}
              />
              <small style={{ color: "red" }}>{error.addressError}</small>
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="inputCity">City</label>
              <input
                type="text"
                className="form-control"
                id="inputCity"
                name="city"
                value={prod.cityValue}
                onChange={handleChange}
              />
              <small style={{ color: "red" }}>{error.cityError}</small>
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add;
