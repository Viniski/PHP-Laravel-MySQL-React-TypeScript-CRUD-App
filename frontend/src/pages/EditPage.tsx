import React, { useState, useEffect } from "react";
import axios from "../axios";
import { useNavigate, useParams } from "react-router-dom";
import { Nav } from "../components/Nav";

export function EditProduct() {
  const navigate = useNavigate();

  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    await axios
      .get(`/products/${id}`)
      .then(({ data }) => {
        const { title, amount } = data.product;
        setTitle(title);
        setAmount(amount);
      })
      .catch(({ response: { data } }) => {
        console.log(data.message);
      });
  };

  const updateProduct = async (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("_method", "PATCH");
    formData.append("title", title);
    formData.append("amount", amount);

    await axios
      .post("http://127.0.0.1:8000/api/products/" + id, formData)
      .then(({ data }) => {
        console.log(data.message);
        navigate("/");
      })
      .catch(({ response }) => {
        if (response.status == 422) {
          console.log(response.data.errors);
        } else {
          console.log(response.data.message);
        }
      });
  };

  return (
    <>
      <Nav />
      <div className="container mx-auto mt-5">
        <div className="row justify-content-center">
          <div className="conl-12 col-sm-12 col-md-12">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title"> Edit Form</h3>
                <hr></hr>
                <div className="from-wrapper">
                  <form onSubmit={updateProduct}>
                    <div className="mb-3">
                      <label className="form-label">Name of channel:</label>
                      <input
                        type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => {
                          setTitle(e.target.value);
                        }}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Number of clients:</label>
                      <input
                        type="number"
                        id="exampleFormControlTextarea1"
                        className="form-control"
                        value={amount}
                        onChange={(e) => {
                          setAmount(e.target.value);
                        }}
                      />
                    </div>
                    <div className="mb-3">
                      <button type="submit" className="btn btn-primary mb-3">
                        Update
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
