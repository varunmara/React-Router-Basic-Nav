import React from "react";
import { Route, Link } from "react-router-dom";
import Contact from "./Contact";
import About from "./About";
import Home from "./Home";
const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <Link to="/"> Home </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/about"> About </Link>
        <Route exact path="/" component={Home} />

        <Route path="/about" component={About} />

        <Route path="/contact" component={Contact} />
      </div>
    </div>
  );
};

export default Navigation;
