import { Component } from "react";
import BookList from "./SecondaryComponents/BookList";
import Welcome from "./SecondaryComponents/Welcome";
import { Col, Row } from "react-bootstrap";
import InputComments from "./SecondaryComponents/inputComment";

class MyMain extends Component {
  state = {
    book: "",
  };

  nameBookState = (nameBook) => {
    this.setState({ book: nameBook });
  };

  render() {
    return (
      <>
        <Welcome className="mb-5 w-100   bg-secondary py-5" />
        <Row>
          <Col className="col-book">
            <BookList
              generi={this.props.gender}
              nomeBook={this.state.book}
              nameBookState={this.nameBookState}
            />
          </Col>
          {this.state.book && (
            <Col
              xs={4}
              className="d-none d-md-flex flex-column col-imput justify-content-center align-items-center"
            >
              <h3>Hai selezionato:</h3>
              <h2 className="text-center">{this.state.book.title}</h2>
              <InputComments book={this.state.book}></InputComments>
            </Col>
          )}
        </Row>
      </>
    );
  }
}

export default MyMain;
