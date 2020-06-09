// with redux forms we dont need action reducer

import React from "react";
// import { connect } from "react-redux";
// import { signUp } from "../actions";

import SignupForm from "./_signUpForm";

import bck1 from "../resources/bck1.jpg";

class SignUp extends React.Component {
  onSubmit = (formValues) => {
    // this.props.signUp(formValues);
    console.log(formValues);
  };

  render() {
    return (
      <div
        className="container"
        style={{ position: "relative", marginTop: "20px" }}
      >
        <img src={bck1} alt="Background" style={{ position: "absolute" }} />
        <div
          className="container"
          style={{
            position: "absolute",
            top: "100px",
            left: "50%",
            maxWidth: "500px",
            backgroundColor: "orange",
            padding: "20px",
          }}
        >
          <h3 style={{ align: "center" }}>Sign Up</h3>
          <SignupForm onSubmit={this.onSubmit} />
        </div>
      </div>
    );
  }
}

// export default connect(null, { signUp })(SignUp);
export default SignUp;
