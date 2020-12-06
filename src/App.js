import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main2 from "./components/Main2";
import Add2 from "./components/Add2";
import Edit from "./components/Edit";
import axios from "axios";
import { useState, useEffect, useCallback } from "react";
const App = () => {
  const [products, setProducts] = useState([]);
  const [idEdited, setIdEdited] = useState("");

  const addHandler = useCallback(
    newProduct => {
      axios.post("http://localhost:5000/api/places/", newProduct).then(res => {
        console.log(res.status);
        const newProducts = [...products, res.data];

        setProducts(newProducts);
      });
    },
    [products]
  );
  const dlt = useCallback(
    _id => {
      axios.delete(`http://localhost:5000/api/places/${_id}`);
      const newProducts = products.filter(prod => {
        return prod._id !== _id;
      });
      setProducts(newProducts);
    },
    [products]
  );

  const editHandler = _id => {
    setIdEdited(_id);
  };

  // useEffect(() => {
  //   dlt();
  // }, []);

  useEffect(() => {
    axios.get("http://localhost:5000/api/places/").then(res => {
      setProducts(res.data);
    });
  }, [products]);
  // console.log(products);

  // useEffect(() => {
  //   addHandler();
  // }, []);

  // const edit = i => {
  //   setBtn({
  //     iseditable: !btn.iseditable,
  //     editIndex: i,
  //   });
  // };

  // const editHandler = newProduct => {
  //   if (btn.iseditable) {
  //     console.log(btn.editIndex, newProduct);

  //     axios
  //       .put(`http://localhost:5000/api/places/${btn.editIndex}`, newProduct)
  //       .then(res => {
  //         console.log(res.data);
  //         const newProducts = products.splice(btn.editIndex, 1, res.data);
  //         console.log(newProducts);
  //         setProducts([...products, newProducts]);
  //       })
  //       .catch(e => {
  //         console.log(e);
  //       });
  //   }
  // };
  // useEffect(() => {
  //   editHandler();
  // }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <Route
            exact
            path="/"
            render={props => (
              <Main2
                {...props}
                products={products}
                delete={dlt}
                editHandler={editHandler}
              />
            )}
          ></Route>
          <Route
            exact
            path="/add"
            render={props => <Add2 {...props} addProduct={addHandler} />}
          ></Route>
          <Route
            exact
            path="/edit"
            render={props => <Edit {...props} id={idEdited} />}
          ></Route>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
