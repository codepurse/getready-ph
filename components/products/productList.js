import React, { Component } from "react";
import productData from "../../data/products.json";
import { HomeProduct } from "./product";
class ProductList extends Component {
  state = {};
  renderProducts(products) {
    console.log(products);
    return products.map(product => (
      <HomeProduct
        name={product.name}
        image={product.image}
        price={product.price}
        description={product.description}
      />
    ));
  }
  render() {
    return (
      <React.Fragment>
        <div className="col-lg-9">
          <div className="row rowLatest">
            <div className="col-lg-12 colLatest" style={{ padding: "0px 5px" }}>
              <label className="platest ">LATEST</label>
              <label className="pviewmore float-right ">VIEW MORE</label>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12" style={{ padding: "0px 5px" }}>
              <div className="card-deck">
                {this.renderProducts([
                  productData[0],
                  productData[1],
                  productData[2]
                ])}
              </div>
            </div>
          </div>
          <div className="row rowLatest">
            <div className="col-lg-12 colLatest" style={{ padding: "0px 5px" }}>
              <label className="platest ">LATEST</label>
              <label className="pviewmore float-right ">VIEW MORE</label>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12" style={{ padding: "0px 5px" }}>
              <div className="card-deck">
                {this.renderProducts([
                  productData[3],
                  productData[4],
                  productData[5]
                ])}
              </div>
            </div>
          </div>
          <div className="row rowLatest">
            <div className="col-lg-12 colLatest" style={{ padding: "0px 5px" }}>
              <label className="platest ">LATEST</label>
              <label className="pviewmore float-right ">VIEW MORE</label>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12" style={{ padding: "0px 5px" }}>
              <div className="card-deck">
                {this.renderProducts([
                  productData[6],
                  productData[7],
                  productData[8]
                ])}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductList;
