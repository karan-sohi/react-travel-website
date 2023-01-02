import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import { Fragment } from "react";
import AllCards from "./components/AllCards";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from './pages/HomePage';
import Products from "./pages/Products";
import Services from './pages/Services'

function App() {
  return (
    <Fragment>
      <Navigation></Navigation>
      <Switch>
        <Route path="/" exact>
          <HomePage />
          <AllCards />
        </Route>
        <Route path="/products">
          <Products/>
        </Route>
        <Route>
          <Services></Services>
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
