import { Component } from "react";
import BookList from "./SecondaryComponents/BookList";
import Welcome from "./SecondaryComponents/Welcome";
import { Col, Row } from "react-bootstrap";
import InputComments from "./SecondaryComponents/inputComment";

class MyMain extends Component {
  state = {
    book: "",
    comments: [],
  };

  myFetch = async () => {
    let risposta = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" +
        this.state.book.asin,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJiMDMzNzY4MzQzMTAwMTRkZWE4NjYiLCJpYXQiOjE2ODA1NDA0NzMsImV4cCI6MTY4MTc1MDA3M30.8S5TtWxzkTBrVv-_LX4RmXfhrs6Zb8ziVWZJ-ywN5Lc",
        },
      }
    );
    let dato = await risposta.json();

    this.setState({ comments: dato });
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
              myFetch={this.myFetch}
              comments={this.state.comments}
            />
          </Col>
          {this.state.book && (
            <Col
              xs={4}
              className="d-none d-md-flex flex-column col-imput justify-content-center align-items-center"
            >
              <h3>Hai selezionato:</h3>
              <h2 className="text-center">{this.state.book.title}</h2>
              <InputComments
                setSubmit={this.setSubmit}
                book={this.state.book}
                asin={this.state.book.asin}
                myFetch={this.myFetch}
              ></InputComments>
            </Col>
          )}
        </Row>
      </>
    );
  }
}

export default MyMain;
