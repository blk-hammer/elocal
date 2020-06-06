import React from "react";
import { connect } from "react-redux";
import { fetchSeller } from "../actions";
import { Link } from "react-router-dom";

import Header from "./_Header";

class Seller extends React.Component {
  componentDidMount() {
    this.props.fetchSeller();
  }
  _isempty(obj) {
    // returns 0/false if empty
    return Object.keys(obj).length;
  }
  renderList() {
    let list;
    if (this._isempty(this.props.seller)) {
      list = this.props.seller.otherSellerList.map((el) => {
        return (
          <div className="col">
            <input type="radio" id="male" name="gender" value="male" />
            <label for="male">Male</label>
            <br />
          </div>
        );
      });
    }
    return list;
  }

  render() {
    console.log(this.props.seller);
    return (
      <div className="container" style={{ maxWidth: "95%" }}>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <div className="col-3">
              <Link to={`product`}>return to product</Link>
            </div>
            <div className="col offset-1">{this.props.location.state.name}</div>
          </div>
          <div className="row">
            <div className="col">
              <input type="radio" id="male" name="gender" value="male" />
              <label for="male">Male</label>
              <br />
              <input type="radio" id="female" name="gender" value="female" />
              <label for="female">Female</label>
              <br />
              <input type="radio" id="other" name="gender" value="other" />
              <label for="other">Other</label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { seller: state.seller };
};

export default connect(mapStateToProps, { fetchSeller })(Seller);
