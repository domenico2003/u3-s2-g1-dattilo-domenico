import { Component } from "react";
import { Badge, ListGroup } from "react-bootstrap";

class CommentsList extends Component {
  state = {
    comments: this.props.comments,
  };

  componentDidMount() {
    this.props.myFetch();
  }

  render() {
    return (
      <ListGroup>
        {this.props.comments.map((comment) => {
          console.log("commentList", comment);
          return (
            <ListGroup.Item key={comment._id}>
              <div className="d-flex justify-content-between align-items-center">
                <span className="autorComment">{comment.author}</span>
                <Badge bg="secondary">{comment.rate}/5</Badge>
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
