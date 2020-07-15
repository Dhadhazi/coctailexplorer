import React, { useState } from "react";
import { Route } from "react-router-dom";

import Categories from "./components/Categories";
import DrinkCardGroup from "./components/DrinkCardGroup";
import DrinkDetail from "./components/DrinkDetail";
import Search from "./components/Search";
import "./App.css";

function App() {
  const [search, setSearch] = useState([]);

  const handleValueChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location = `https://cexplorer-dh.herokuapp.com/search/${search}`;
  };

  return (
    <div className="container">
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Cocktail Database</h1>
          <p className="lead">
            <Categories />
            <form className="form-inline" onSubmit={handleSubmit}>
              <div className="form-group mx-sm-3 mb-2">
                <input
                  type="text"
                  className="form-control"
                  onChange={handleValueChange}
                  placeholder="Search a Drink"
                />
              </div>
              <button type="submit" className="btn btn-primary mb-2">
                Search!
              </button>
            </form>
          </p>
        </div>
      </div>
      <Route path="/search/:name" component={Search} />
      <Route path="/category/:category" component={DrinkCardGroup} />
      <Route path="/drink/:id" component={DrinkDetail} />
    </div>
  );
}

export default App;
