import React from "react";
import { connect } from "react-redux";
import { searchStar } from "../Redux/Actions";

const mapStateToProps = state => ({
  searchRating: state.searchRating
});

const mapDispatchToProps = dispatch => ({
  searchStar: rate => dispatch(searchStar(rate))
});
const Star = props => {
  console.log("props", props);
  const arr = [];

  for (let i = 0; i < 5; i++) {
    if (i < (props.cmpMovieCard ? props.rating : props.searchRating)) {
      arr.push(
        <span key={i} onClick={() => props.searchStar(i + 1)}>
          ★
        </span>
      );
    } else {
      arr.push(
        <span key={i} onClick={() => props.searchStar(i + 1)}>
          ☆
        </span>
      );
    }
  }
  return (
    <div className="star">
      <div className="star-custom">{arr}</div>
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Star);
