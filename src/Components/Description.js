import React, { Component } from "react";
import { connect } from "react-redux";
import Star from "./Star";

class Description extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.MovieList.filter(
          el => el.id === Number(this.props.match.params.id)
        ).map(el => (
          <div>
            Description to movie : {el.title}
            <h1>Title : {el.title}</h1>
            <p>Date : {el.annee}</p>
            <Star rating={el.rating} />
          </div>
        ))}
      </div>
    );
  }
}

const mapstateToProps = state => {
  return {
    MovieList: state.movieList
  };
};
export default connect(mapstateToProps)(Description);
