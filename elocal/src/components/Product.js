import React from "react";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProduct } from "../actions";
import Header from "./_Header";
import Table from "./_Table";

import phone from "../resources/Bitmap.png";
import smallPhone from "../resources/Bitmap1.png";
import seller from "../resources/store.png";
import gp21 from "../resources/group-21.png";
import gp26 from "../resources/group-26.png";
import gp27 from "../resources/group-27.png";
import gp28 from "../resources/group-28.png";

class Product extends React.Component {
  componentDidMount() {
    this.props.fetchProduct();
  }

  _isempty(obj) {
    // returns 0/false if empty
    return Object.keys(obj).length;
  }
  renderName() {
    if (this._isempty(this.props.product))
      return this.props.product.productDetail.productName;
  }
  renderPrice() {
    if (this._isempty(this.props.product))
      return (
        <div className="row">
          <div
            className="col-2"
            style={{
              margin: "10px 0",
              font: "Bold 34px/41px Roboto",
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            {this.props.product.productDetail.variants[0].elocalsPrice}
          </div>
          <div
            className="col-2"
            style={{
              textDecoration: "line-through",
              font: "Bold 20px/24px Roboto",
              margin: "10px 0",
              opacity: "0.34",
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            {this.props.product.productDetail.variants[0].sellerPrice}
          </div>
        </div>
      );
  }
  renderList() {
    let list;
    if (this._isempty(this.props.product)) {
      list = this.props.product.productDetail.productKeyFeatures.map((el) => {
        return (
          <div className="row">
            <div className="col">{el}</div>
          </div>
        );
      });
    }

    return list;
  }

  renderCard(img, text1, text2, style = { height: "25px", width: "25px" }) {
    let classname;
    let styl = { fontSize: "70%" };
    if (arguments.length === 4) {
      classname = "col-md-4";
      styl = {};
    } else classname = "col-md-3";
    return (
      <div className="card mb-3" style={{ maxWidth: "200px" }}>
        <div className="row no-gutters">
          <div className={classname} style={{ margin: "5px 2px 5px 5px" }}>
            <img src={img} style={style} className="card-img" alt="21" />
          </div>
          <div className="col-md">
            <div className="card-body" style={{ padding: "7px 0 0 0" }}>
              <small className="text-muted" style={styl}>
                {text1}
              </small>
              <p className="card-text">{text2}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  renderSellerName() {
    if (this._isempty(this.props.product)) {
      const name = this.props.product.productDetail.sellerName;
      return name;
    }
  }

  render() {
    const { product } = this.props;

    return (
      <div style={{ margin: "0 50px", maxWidth: "95%" }}>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <div className="row">
                <div className="col-2">Home>Mobiles</div>
              </div>
              <div className="row">
                <div className="col-2 offset-10 ">
                  <i className="heart outline icon"></i>
                  <i className="share alternate icon"></i>
                </div>
              </div>

              <div className="row">
                <div className="col-2">
                  <div className="row">
                    <div className="col" style={{ padding: "20px" }}>
                      <div className="ui small image">
                        <img src={smallPhone} alt="smallImage" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col" style={{ padding: "20px" }}>
                      <div className="ui small image">
                        <img src={smallPhone} alt="smallImage" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col" style={{ padding: "20px" }}>
                      <div className="ui small image">
                        <img src={smallPhone} alt="smallImage" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col" style={{ padding: "20px" }}>
                      <div className="ui small image">
                        <img src={smallPhone} alt="smallImage" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col" style={{ padding: "20px" }}>
                      <div className="ui small image">
                        <img src={smallPhone} alt="smallImage" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-10">
                  <div className="ui larges image">
                    <img src={phone} alt="bigImage" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col ">&nbsp;</div>
              </div>
              <div className="row">
                <div className="col offset-8 ">
                  <div className="ui checkbox">
                    <input type="checkbox" name="example" />
                    <label htmlFor="example">Add to compare</label>
                  </div>
                </div>
              </div>

              <div className="row" style={{ marginBottom: "10px" }}>
                <div className="col">
                  <b>{this.renderName()}</b>
                </div>
              </div>
              {this.renderList()}
              <div className="row" style={{ marginTop: "20px" }}>
                <div className="col-8">
                  color:
                  <img src={smallPhone} alt="smallImage" />
                  <img src={smallPhone} alt="smallImage" />
                </div>
                <div className="col-4 " style={{ textAlign: "right" }}>
                  <label htmlFor="number">Quantity:</label>
                  <select
                    name="quantity"
                    id="number"
                    style={{ border: "none" }}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
              </div>
              {this.renderPrice()}
              <div className="row">
                <div className="col-3" style={{ padding: "10px" }}>
                  <Button block color="primary">
                    buy now
                  </Button>{" "}
                </div>
                <div className="col-3" style={{ padding: "10px" }}>
                  <Button block color="outline-primary">
                    add to cart
                  </Button>{" "}
                </div>
                <div className="col-3" style={{ padding: "10px" }}>
                  <Button block color="link">
                    store pickup
                  </Button>{" "}
                </div>
              </div>
            </div>

            <div className="col-6">
              <div className="row">
                <div
                  className="col-9"
                  style={{ padding: "10px", textAlign: "left" }}
                >
                  {this.renderCard(seller, "Seller", this.renderSellerName(), {
                    height: "50px",
                    width: "50px",
                  })}
                </div>
                <div
                  className="col-3"
                  style={{
                    padding: "10px 30px",
                    textAlign: "right",
                  }}
                >
                  <Link
                    to={{
                      pathname: `seller`,
                      state: { name: `${this.renderName()}` },
                    }}
                  >
                    view more sellers
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-6">
              <div className="row">
                <div className="col-3" style={{ padding: "10px" }}>
                  {this.renderCard(gp26, "Shipping Free", "Free")}
                </div>

                <div className="col-3" style={{ padding: "10px" }}>
                  {this.renderCard(gp27, "Best Price", "Always")}
                </div>
                <div className="col-3" style={{ padding: "10px" }}>
                  {this.renderCard(gp21, "Pickup Service", "One Hour")}
                </div>
                <div className="col-3" style={{ padding: "10px" }}>
                  {this.renderCard(
                    gp28,
                    "Request Your Product",
                    "Get Anything"
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Table />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { product: state.product };
};

export default connect(mapStateToProps, { fetchProduct })(Product);
