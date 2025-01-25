import { Link } from "react-router-dom";
import "./Navbar.css";
// import LoanCalculator from "../components/LoanCalculator";

const Navbar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="Main Navigation">
      <div className="navbar__brand">
        <Link to="/" className="navbar__link">
          Hackathon 2024-2025
        </Link>
      </div>
      <div className="navbar__actions">
        <Link to={"/home"} className="navbar__link">
          Home
        </Link>
        <Link to="/loan-calculator" className="navbar__link">
          Loan Calculator
        </Link>
        <Link to="/login" className="navbar__button" aria-label="Login">
          Login
        </Link>
        <Link to="/signup" className="navbar__button" aria-label="Register">
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;