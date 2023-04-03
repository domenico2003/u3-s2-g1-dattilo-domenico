import { Component } from "react";
import { Button, Form } from "react-bootstrap";

class InputComments extends Component {
  state = {
    bookSelected: null,
    objComment: {
      comment: "",
      rate: "",
      elementId: "",
    },
  };

  componentDidMount() {
    this.bookselect();
  }
  componentDidUpdate(vecchiaProp) {
    if (vecchiaProp.book !== this.props.book) {
      this.bookselect();
    }
  }

  writingComment = async (e) => {
    e.preventDefault();

    let risposta = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments",
      {
        method: "POST",
        body: JSON.stringify(this.state.objComment),
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJiMDMzNzY4MzQzMTAwMTRkZWE4NjYiLCJpYXQiOjE2ODA1NDA0NzMsImV4cCI6MTY4MTc1MDA3M30.8S5TtWxzkTBrVv-_LX4RmXfhrs6Zb8ziVWZJ-ywN5Lc",

          "Content-Type": "application/json",
        },
      }
    );
    console.log(risposta.response);
  };

  bookselect = () => {
    this.setState({ bookSelected: this.props.book });
  };

  render() {
    console.log("render", this.state.objComment);
    return (
      <>
        <Form
          onSubmit={this.writingComment}
          className="form d-flex flex-column align-items-center"
        >
          <Form.Label>Rating</Form.Label>
          <Form.Select
            aria-label="rating"
            className="form-rating mb-3"
            onChange={(e) => {
              this.setState({
                objComment: {
                  ...this.state.objComment,
                  rate: e.target.value,
                  elementId: this.state.bookSelected.asin,
                },
              });
            }}
            required
          >
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">four</option>
            <option value="5">five</option>
          </Form.Select>
          <Form.Label label="Comments"> Leave a comment!</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            className="comment-area mb-3"
            onChange={(e) => {
              this.setState({
                objComment: {
                  ...this.state.objComment,
                  comment: e.target.value,
                  elementId: this.state.bookSelected.asin,
                },
              });
            }}
            required
          />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </>
    );
  }
}

export default InputComments;
