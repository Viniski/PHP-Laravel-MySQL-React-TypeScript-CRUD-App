import React, { useState } from "react";
import axios from "../axios";
import { useNavigate } from "react-router-dom";
import { Nav } from "../components/Nav";

export function CreateProduct() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const createProduct = async (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("amount", amount);

    console.log(formData);
    await axios
      .post("/products", formData)
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
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="conl-12 col-sm-12 col-md-12">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">
                  Add the customer acquisition channel and the number of
                  customers acquired:
                </h3>
                <hr></hr>
                <div className="from-wrapper">
                  <form onSubmit={createProduct}>
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
                        Save
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
