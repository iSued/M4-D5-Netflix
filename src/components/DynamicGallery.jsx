import React from "react";
import SingleCarousel from "./SingleCarousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import { Divider } from "@material-ui/core";
import { Modal, Button, Form, Spinner } from "react-bootstrap";

class DynamicGallery extends React.Component {
  state = {
    show: false,
    comment: {
      comment: "",
      rate: 3,
      elementId: "",
    },
  };

  handleSubmit = async (id) => {
    try {
      let fakecomment = { ...this.state.comment };
      fakecomment.elementId = id;
      await this.setState({ comment: fakecomment });
      console.log(this.state.comment);
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify(this.state.comment),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2N2UzZjk4MzViMDAwMTc1ODRlZmUiLCJpYXQiOjE2MDU3OTUzOTIsImV4cCI6MTYwNzAwNDk5Mn0.DfmIOMUkFDOn23K1S3KRRfRDXdq3PuQ85LIP5I7piVI",
          },
        }
      );
      if (response.ok) {
        alert("Comment Saved");
        this.setState({
          comment: {
            comment: "",
            rate: 3,
            elementId: "",
          },
        });
      } else {
        console.log("uh oh stinky");
        let error = await response.json();
      }
    } catch (e) {
      console.log(e);
    }
  };
  updateCommentField = (e) => {
    let comment = { ...this.state.comment };
    let currentId = e.currentTarget.id;
    comment[currentId] = e.currentTarget.value;
    this.setState({ comment: comment });
  };
  fetchComments = async (id) => {
    this.setState({ show: true });
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${id}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2N2UzZjk4MzViMDAwMTc1ODRlZmUiLCJpYXQiOjE2MDU3OTUzOTIsImV4cCI6MTYwNzAwNDk5Mn0.DfmIOMUkFDOn23K1S3KRRfRDXdq3PuQ85LIP5I7piVI",
          },
        }
      );
      let comments = await response.json();
      console.log(comments);
    } catch (e) {}
  };
  render() {
    if (this.props.movieArray) {
      if (this.props.loading === true) {
        return (
          <div>
            <h3>Loading...</h3>
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </div>
        );
      } else {
        return (
          <>
            <h2 className="align-self-start">
              First {this.props.movieArray.length} results for:{" "}
              {this.props.searchQuery}
            </h2>
            {this.props.movieArray.length > 0 && (
              <OwlCarousel margin={10}>
                {this.props.movieArray.map((movie) => (
                  <div className="item">
                    <img src={movie.Poster} alt="" />
                    <Button
                      variant="primary"
                      onClick={() => this.fetchComments(movie.imdbID)}
                    >
                      Launch demo modal
                    </Button>
                    <Modal
                      show={this.state.show}
                      onHide={() => this.setState({ show: false })}
                    >
                      <Modal.Dialog>
                        <Modal.Header closeButton>
                          <Modal.Title>Add Comment</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                          <Form.Group>
                            <Form.Group>
                              <Form.Label htmlFor="comment">
                                Comment:
                              </Form.Label>
                              <Form.Control
                                as="textarea"
                                name="comment"
                                id="comment"
                                placeholder="What did you think?"
                                value={this.state.comment.comment}
                                onChange={this.updateCommentField}
                                required
                              />
                            </Form.Group>
                            <br />
                            <Form.Group>
                              <Form.Label htmlFor="rate">Rating:</Form.Label>
                              <Form.Control
                                as="select"
                                name="rate"
                                id="rate"
                                value={this.state.comment.rate}
                                onChange={this.updateCommentField}
                                required
                              >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </Form.Control>
                            </Form.Group>
                          </Form.Group>
                        </Modal.Body>

                        <Modal.Footer>
                          <Button variant="secondary">Close</Button>
                          <Button
                            variant="primary"
                            onClick={(e) => {
                              e.preventDefault();
                              this.handleSubmit(movie.imdbID);
                            }}
                          >
                            Submit Commet
                          </Button>
                        </Modal.Footer>
                      </Modal.Dialog>
                    </Modal>
                  </div>
                ))}
              </OwlCarousel>
            )}
          </>
        );
      }
    } else {
      return <h1 className="mb-5">No search results found :(</h1>;
    }
  }
}

export default DynamicGallery;
