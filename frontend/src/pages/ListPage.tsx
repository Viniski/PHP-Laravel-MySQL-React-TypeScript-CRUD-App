import { useState, useEffect } from "react";
import axios from "../axios";
import { Link } from "react-router-dom";
import { Nav } from "../components/Nav";

export function ProductList() {
  const [products, setProducts] = useState([
    { id: 0, title: "null", amount: "null" },
  ]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    await axios.get("/products").then(({ data }) => {
      setProducts(data);
    });
  };

  const deleteProduct = async (id: string | number) => {
    await axios
      .delete("/products/" + id)
      .then(() => {
        fetchProducts();
      })
      .catch(({ response: { data } }) => {
        console.log(data.message);
      });
  };

  return (
    <>
      <Nav />
      <div className="container">
        <div className="row">
          <div className="conl-12">
            <Link
              className="btn btn-primary mb-2 float-end"
              to="/product/create"
            >
              Create
            </Link>
            <div className="col-12">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {products.length > 0 &&
                    products.map((row, key) => (
                      <tr key={key}>
                        <td>{row.title}</td>
                        <td>{row.amount}</td>
                        <td>
                          <Link
                            className="btn btn-success mb-2 float-end"
                            to={`/product/edit/${row.id}`}
                          >
                            Edit
                          </Link>
                        </td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => deleteProduct(row.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
