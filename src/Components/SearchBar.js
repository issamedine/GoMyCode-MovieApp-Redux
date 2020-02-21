import React, { Component } from "react";
import "./SearchBar.scss";
import { connect } from "react-redux";
import { searchInput, searchStar } from "../Redux/Actions";
import Star from "./Star";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="search-bar">
        <input
          type="text"
          placeholder="search movie"
          onChange={e => this.props.searchInput(e.target.value)}
        />
        {/* <span>★★★☆☆</span> */}
        <Star />
      </div>
    );
  }
}

const mapDispatchToProps = {
  searchInput,
  searchStar
};

export default connect(null, mapDispatchToProps)(SearchBar);
