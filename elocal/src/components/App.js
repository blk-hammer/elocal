import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Product from "./Product";
import Seller from "./Seller";

const App = () => {
  return (
    <div>
      {
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/product" exact component={Product} />
          <Route path="/seller" exact component={Seller} />
        </Router>
      }
    </div>
  );
};

export default App;
