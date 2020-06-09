import React from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import SigninForm from "./_signinForm";

// const Header = () => {
//   return (
//     <div className="ui secondary pointing menu">
//       <div className="item">Welcome to Edunomics</div>
//       <div className="right menu">
//         <Link data-toggle="dropdown" class="nav-link dropdown-toggle" href="#">
//           Login
//         </Link>
//         <ul class="dropdown-menu form-wrapper">
//           <li>
//             <form action="/examples/actions/confirmation.php" method="post">
//               <div class="form-group">
//                 <input
//                   type="text"
//                   class="form-control"
//                   placeholder="Username"
//                   required="required"
//                 />
//               </div>
//               <div class="form-group">
//                 <input
//                   type="password"
//                   class="form-control"
//                   placeholder="Password"
//                   required="required"
//                 />
//               </div>
//               <input
//                 type="submit"
//                 class="btn btn-primary btn-block"
//                 value="Login"
//               />
//             </form>
//           </li>
//         </ul>

//         <Link to="/signup" className="item">
//           Sign Up
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Header;
const onSubmit = (values) => {
  console.log(values);
};

const Header = () => {
  return (
    <Nav>
      <Nav.Item>
        <Nav.Link href="#">Welcome to Edunomics</Nav.Link>
      </Nav.Item>

      <NavDropdown
        className="justify-content-end"
        title="Sign In"
        id="nav-dropdown"
      >
        <SigninForm onSubmit={onSubmit} />
      </NavDropdown>
      <Nav.Item>
        <Nav.Link href="/signup">NavLink 3 content</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};
export default Header;
