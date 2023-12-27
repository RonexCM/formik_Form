import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-style">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/LogIn">Log In</NavLink>

      <NavLink to="/SignUp">Sign Up</NavLink>

      <NavLink to="/admin">Admin</NavLink>
    </div>
  );
};

export default Header;
