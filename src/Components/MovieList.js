import React, { Component } from "react";
import "./MovieList.scss";
import MovieModal from "./MovieModal";
import { connect } from "react-redux";
import { remove, searchInput } from "../Redux/Actions";
import Star from "./Star";
import { Link } from "react-router-dom";
// import Description from "./Description";

class MovieList extends Component {
  constructor(props) {
    super(props);
  }

  // modalUpdate = () => {
  //   <MovieModal />;
  // };

  render() {
    const { movieList, remove, newList } = this.props;
    console.log(movieList);
    return (
      <div className="movie-list">
        <div className="row">
          {(!newList.length ? movieList : newList).map((el, key) => {
            return (
              <div className="col-xs-12 col-sm-12 col-md-3" key={key}>
                <div className="movie-item">
                  <img src={el.image} alt="" width="250" />
                  <div className="movie-desc">
                    <h4>{el.title}</h4>
                    <p>{el.annee}</p>
                    <p>
                      <Star rating={el.rating} cmpMovieCard={true} />
                    </p>
                    <p>
                      <Link to={`/description/${el.id}`}>Description</Link>
                    </p>
                    <p className="movie-btn">
                      {/* <button onClick={this.modalUpdate}>Edit</button> */}
                      <MovieModal isEdit={true} movie={el} />
                      <button onClick={() => remove(el.id)}>Remove</button>
                    </p>
                  </div>
                </div>
              </div>
            );
          })
          // ) : (
          // <div className="col-xs-12 col-md-12">You have no movie ..</div>
          }
          <div className="col-xs-12 col-sm-12 col-md-3">
            <div className="add-movie">
              <MovieModal isEdit={false} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movieList: state.movieList,
    newList: state.filtredList
  };
};
const mapDispatchToProps = {
  remove,
  searchInput
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
