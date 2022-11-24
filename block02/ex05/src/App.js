import React from "react";
import "./App.css";
import products from "./components/products";
import footer from "./components/footer";
import header from "./components/header";
import ProductList from "./components/ProductList.js";
import SingleProduct from "./components/SingleProduct.js";

function App() {
  let productBest = (arr) =>
    arr.map((value) => {
      return value.bestSeller ? (
          <SingleProduct product={value} />
      ) : null;
    });

  return (
    <div className="App">
      {header()}
      <div>
        <h1>Our Products</h1>
        <ul className="products">
          <ProductList products={products} />
        </ul>
        <h1>Bestsellers</h1>
        <ul className="products">{productBest(products)}</ul>
      </div>
      {footer()}
    </div>
  );
}

export default App;
