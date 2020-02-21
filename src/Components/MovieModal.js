import React, { Component } from "react";
import { Button, Modal, Footer } from "react-bootstrap";
import { connect } from "react-redux";
import { add } from "../Redux/Actions";
import { edit } from "../Redux/Actions";
import { render } from "@testing-library/react";

class MovieModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,

      newMovie: {
        id: "",
        title: "",
        annee: "",
        rating: "",
        image: ""
      }
    };
  }

  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  componentDidMount() {
    this.props.isEdit &&
      this.setState({
        newMovie: {
          id: this.props.movie.id,
          title: this.props.movie.title,
          annee: this.props.movie.annee,
          rating: this.props.movie.rating,
          image: this.props.movie.image
        }
      });
  }
  handleChange = e => {
    // this.setState({ title: e.target.value ,annee: e.target.value, rating: e.target.value, image: e.target.value  })
    this.setState({
      newMovie: { ...this.state.newMovie, [e.target.name]: e.target.value }
    });
  };

  addMovie = () => {
    this.props.add({ ...this.state.newMovie, id: Date.now() });
    this.setState({
      show: false
    });
  };

  handleClose = () => {
    this.setState({
      show: false
    });
  };

  handleShow = () => {
    this.setState({
      show: true
    });
  };

  handelClick = () => {
    this.props.isEdit ? this.props.edit(this.state.newMovie) : this.addMovie();
  };

  render() {
    return (
      <div>
        <div>
          {this.props.isEdit ? (
            <button onClick={this.handleShow}>Edit</button>
          ) : (
            <i class="fas fa-plus" onClick={this.handleShow}></i>
          )}

          <Modal show={this.state.show} onHide={this.andleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Enter your movie</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <input
                type="text"
                name="title"
                placeholder="enter title movie"
                onChange={this.handleChange}
                value={this.state.newMovie.title}
              />
              <input
                type="text"
                name="annee"
                placeholder="enter date prod"
                onChange={this.handleChange}
                value={this.state.newMovie.annee}
              />
              <input
                type="text"
                name="rating"
                placeholder="enter rating"
                onChange={this.handleChange}
                value={this.state.newMovie.rating}
              />
              <input
                type="text"
                name="image"
                placeholder="enter image"
                onChange={this.handleChange}
                value={this.state.newMovie.image}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  this.handelClick();
                  this.handleClose();
                }}
              >
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  add: newMovie => dispatch(add(newMovie)),
  edit: editedMovie => dispatch(edit(editedMovie))
});
export default connect(null, mapDispatchToProps)(MovieModal);
