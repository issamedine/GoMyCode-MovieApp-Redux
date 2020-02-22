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
                <div className="movie-item slide-top">
                  <img src={el.image} alt="" width="250" />
                  <div className="movie-desc">
                    <h4 className="title-movie hover-element">{el.title}</h4>
                    <p className="hover-element">{el.annee}</p>
                    <p>
                      <Star rating={el.rating} cmpMovieCard={true} />
                    </p>
                    <p>
                      <Link
                        className="hover-element link-desc"
                        to={`/description/${el.id}`}
                      >
                        Description
                      </Link>
                    </p>
                    <p className="movie-btn">
                      {/* <button onClick={this.modalUpdate}>Edit</button> */}
                      <MovieModal isEdit={true} movie={el} />
                      <button
                        className="btn-add-rem"
                        onClick={() => remove(el.id)}
                      >
                        Remove
                      </button>
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
