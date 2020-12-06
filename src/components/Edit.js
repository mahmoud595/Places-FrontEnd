import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
const Edit = ({ id, ...props }) => {
  const [prod, setProd] = useState({
    // _id: "",
    hostname: "",
    address: "",
    city: "",
    phostname: "",
    paddress: "",
    pcity: "",
  });

  const changeHandler = e => {
    setProd({ ...prod, [e.target.name]: e.target.value });
  };
  const edit = useCallback(() => {
    axios.put(`http://localhost:5000/api/places/${id}`, prod).then(res => {
      console.log(res.data);
    });
  }, [prod, id]);
  const submitHandler = event => {
    event.preventDefault();
    edit();
    props.history.push("/");
  };

  useEffect(() => {
    axios.get(`http://localhost:5000/api/places/${id}`).then(res => {
      console.log(res.data);
      const { hostname, address, city } = res.data;
      console.log(hostname, address, city);
      setProd({
        phostname: hostname,
        paddress: address,
        pcity: city,
      });
    });
  }, [id]);
  return (
    <div>
      <div className="container mb-5">
        <form onSubmit={submitHandler}>
          <div className="form-row">
            <div className="form-group col-md-3">
              <label htmlFor="hostName">Host Name</label>
              <input
                type="text"
                className="form-control"
                id="hostname"
                name="hostname"
                value={prod.hostname}
                onChange={changeHandler}
                placeholder={prod.phostname}
              />
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="inputAddress">Address</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                name="address"
                value={prod.addressValue}
                onChange={changeHandler}
                placeholder={prod.paddress}
              />
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="inputCity">City</label>
              <input
                type="text"
                className="form-control"
                id="inputCity"
                name="city"
                value={prod.cityValue}
                placeholder={prod.pcity}
                onChange={changeHandler}
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
