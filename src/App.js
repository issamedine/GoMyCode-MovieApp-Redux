import React, { Component } from "react";
import "./App.scss";
import SearchBar from "./Components/SearchBar";
import MovieList from "./Components/MovieList";
import { Route } from "react-router-dom";
import Description from "./Components/Description";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <SearchBar />
        {/* <MovieList /> */}
        <Route exact path="/" component={(SearchBar, MovieList)} />
        {/* <Route
          exact
          path="/description/:id"
          render={props => <Description {...props} />}
        /> */}
        <Route path="/description/:id" component={Description} />
      </div>
    );
  }
}

export default App;
