import classes from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

const Navigation = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>TRVL</div>
      <nav className={classes.nav}>
        <ul>
          <NavLink to="/" activeClassName={classes.active} exact>
            <li>Home</li>
          </NavLink>
          <NavLink to="/services" activeClassName={classes.active}>
            <li>Services</li>
          </NavLink>
          <NavLink to="/products" activeClassName={classes.active}>
            <li>Products</li>
          </NavLink>
        </ul>
      </nav>
      <button className={classes.signup}>Sign Up</button>
    </header>
  );
};

export default Navigation;
