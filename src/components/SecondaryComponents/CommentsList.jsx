import { Component } from "react";
import { Badge, Button, ListGroup } from "react-bootstrap";

class CommentsList extends Component {
  state = {
    comments: [],
  };

  myFetch = async () => {
    let risposta = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJiMDMzNzY4MzQzMTAwMTRkZWE4NjYiLCJpYXQiOjE2ODA1NDA0NzMsImV4cCI6MTY4MTc1MDA3M30.8S5TtWxzkTBrVv-_LX4RmXfhrs6Zb8ziVWZJ-ywN5Lc",
        },
      }
    );
    let dato = await risposta.json();
    console.log(dato);

    this.setState({ comments: dato });
  };

  deleteThisComment = async (idCommento) => {};

  componentDidMount() {
    this.myFetch();
  }

  render() {
    console.log(this.state.comments);
    return (
      <ListGroup>
        {this.state.comments.map((comment) => {
          return (
            <ListGroup.Item key={comment._id}>
              <div className="d-flex justify-content-between align-items-center">
                <span className="autorComment">{comment.author}</span>
                <Badge bg="secondary">{comment.rate}/5</Badge>
                <Button
                  variant="danger"
                  className="p-2"
                  onClick={() => {
                    this.deleteThisComment();
                  }}
                >
                  Delete
                </Button>
              </div>
              <p>{comment.comment}</p>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    );
  }
}

export default CommentsList;
