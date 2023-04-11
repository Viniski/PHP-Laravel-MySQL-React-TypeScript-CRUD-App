import { useState, useEffect } from "react";
import axios from "../axios";
import Chart from "react-apexcharts";
import { Nav } from "../components/Nav";

export function ProductChart() {
  const [ProductName, setProductName] = useState<string[]>([]);
  const [ProductAmount, setProductAmount] = useState<number[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    await axios.get("/products").then(({ data }) => {
      console.log(data);
      const name = [];
      const amount = [];
      for (let i = 0; i < data.length; i++) {
        name.push(data[i].title);
        amount.push(parseInt(data[i].amount));
      }
      setProductName(name);
      setProductAmount(amount);
    });
  };

  return (
    <>
      <Nav />
      <div className="container">
        <div className="container-fluid mb-3 mt-5">
          <Chart
            type="pie"
            width={1349}
            height={550}
            series={ProductAmount}
            options={{
              title: { text: "" },
              noData: { text: "Empty Data" },
              labels: ProductName,
            }}
          />
        </div>
      </div>
    </>
  );
}
