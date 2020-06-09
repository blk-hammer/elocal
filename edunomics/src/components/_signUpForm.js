import React from "react";
import { Field, reduxForm } from "redux-form";

class SignUpForm extends React.Component {
  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form container"
      >
        <div className="field">
          <label>Name</label>
          <Field name="Name" component="input" type="text" label="Name" />
        </div>

        <div className="field">
          <label>Email</label>

          <Field
            name="EmailId"
            component="input"
            type="email"
            label="Email Id"
          />
        </div>
        <div className="field">
          <label>Password</label>

          <Field
            name="Password"
            component="input"
            type="password"
            label="Password"
          />
        </div>
        <div className="field">
          <label>Mobile Number </label>
          <Field
            name="Mobile"
            component="input"
            type="number"
            label="Mobile Number"
          />
        </div>

        <button className="ui button" style={{ margin: "0 150px" }}>
          Submit
        </button>
      </form>
    );
  }
}

// const validate = (formValues) => {
//   const errors = {};

//   if (!formValues.Name) {
//     errors.title = "You must enter your name";
//   }

//   if (!formValues.EmailId) {
//     errors.description = "You must enter your emailId";
//   }

//   if (!formValues.Password) {
//     errors.title = "Password cannot be blank";
//   }
//   if (!formValues.Mobile) {
//     errors.title = "You must enter your mobile number";
//   }
//   return errors;
// };

export default reduxForm({
  form: "SignUpForm",
  // validate,
})(SignUpForm);
