import classes from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>TRVL</div>
      <nav className={classes.nav}>
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>Products</li>
        </ul>
      </nav>
      <button className={classes.signup}>Sign Up</button>
    </header>
  );
};

export default Navigation;
