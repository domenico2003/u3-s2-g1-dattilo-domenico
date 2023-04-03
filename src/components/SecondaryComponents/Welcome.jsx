import { Component } from "react";
import { Container } from "react-bootstrap";

class Welcome extends Component {
  render() {
    return (
      <>
        <div className={this.props.className}>
          <Container>
            <h1 className="mt-5 ">EpiBooks</h1>
            <p className="mb-5  fs-5 fw-bold ">compra i libri che vuoi</p>
          </Container>
        </div>
      </>
    );
  }
}

export default Welcome;
