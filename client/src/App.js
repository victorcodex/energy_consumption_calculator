import React, { Component } from "react";
import Consumption from "./components/Consumption";
import CostList from "./components/CostList";
import "./App.css";
import ProductList from "./components/ProductList";

class App extends Component {
  state = {
    costList: null,
    productList: null,
    costLoading: false,
    productsLoading: false
  };

  generateCost = value => {
    const consumptionValue = Number(value);

    // validate consumption value
    if (!consumptionValue) {
      alert("Kindly enter a vaild number e.g 3400");
      return;
    }

    this.setState({ costLoading: true });

    // fetch consumption cost with consumption value
    fetch(`/api/products/${consumptionValue}`)
      .then(response => response.json())
      .then(data =>
        this.setState({ costList: data.products, costLoading: false })
      );
  };

  getAllProducts = () => {
    this.setState({ productsLoading: true });
    fetch(`/api/products`)
      .then(response => response.json())
      .then(data =>
        this.setState({ productList: data.products, productsLoading: false })
      );
  };

  render() {
    const { costList, costLoading, productList, productsLoading } = this.state;

    return (
      <div className="App">
        <div className="wrapper">
          {/* Consumption form */}
          <Consumption generateCost={this.generateCost} />

          {/* Loading indicator */}
          {costLoading ? <span>Loading</span> : null}

          {/* Cost list */}
          {costList ? <CostList data={costList} /> : null}

          <h3 style={{ textAlign: "center" }}>OR</h3>

          <button onClick={this.getAllProducts}>Show All Products</button>

          {/* Loading indicator */}
          {productsLoading ? <span>Loading</span> : null}
          {productList ? <ProductList data={productList} /> : null}
        </div>
      </div>
    );
  }
}

export default App;
