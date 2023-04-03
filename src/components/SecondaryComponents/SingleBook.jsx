import { Component } from "react";
import { Card, Col } from "react-bootstrap";
import CommentsList from "./CommentsList";

class SingleBook extends Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <>
        <Col key={this.props.libro.asin} className="mb-5 mycol">
          <Card className={this.state.selected && "col-selezionata"}>
            <Card.Img
              variant="top"
              src={this.props.libro.img}
              onClick={() => {
                !this.state.selected
                  ? this.setState({ selected: true })
                  : this.setState({ selected: false });

                this.props.nameBookState(this.props.libro);
              }}
            />
            <Card.Body className="d-flex flex-column justify-content-between pb-0">
              <Card.Title>{this.props.libro.title}</Card.Title>
              <hr className="m-0" />
              <div className="d-flex justify-content-between w-100 ">
                <Card.Text className="pb-2">
                  {this.props.libro.price}$
                </Card.Text>
                <Card.Text className="pb-2 fw-bold">
                  {this.props.libro.category}
                </Card.Text>
              </div>
            </Card.Body>
            {this.state.selected && (
              <CommentsList asin={this.props.libro.asin} />
            )}
          </Card>
        </Col>
      </>
    );
  }
}

export default SingleBook;
