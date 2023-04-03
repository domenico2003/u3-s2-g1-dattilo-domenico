import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";

class Myfooter extends Component {
  render() {
    return (
      <footer className="text-white py-5 mt-5">
        <Container>
          <Row xs={1} md={2} lg={4} className="my-3">
            <Col className="text-center mb-5">
              <h5 className="text-title">Ci trovi sui seguenti social:</h5>
              <a href="#placeholder" className="d-block myAncor w-100">
                <div className="d-flex justify-content-around">
                  <i className="bi bi-facebook me-0"></i>
                  <p className="m-0"> Facebook</p>
                </div>
              </a>
              <a href="#placeholder" className="d-block myAncor w-100">
                <div className="d-flex justify-content-around">
                  <i className="bi bi-instagram me-0"></i>
                  <p className="m-0"> Instagram</p>
                </div>
              </a>
              <a href="#placeholder" className="d-block myAncor w-100">
                <div className="d-flex justify-content-around">
                  <i className="bi bi-linkedin me-0"></i>
                  <p className="m-0"> Linkedin</p>
                </div>
              </a>
              <a href="#placeholder" className="d-block myAncor w-100">
                <div className="d-flex justify-content-around">
                  <i className="bi bi-twitter me-0"></i>
                  <p className="m-0"> Twitter</p>
                </div>
              </a>
            </Col>
            <Col className="text-center mb-5">
              <h5 className="text-title">Articoli correlati</h5>
              <a href="#placeholder" className="d-block myAncor w-100">
                L'importanza di leggere
              </a>
              <a href="#placeholder" className="d-block myAncor w-100">
                Libri che ti consigliamo
              </a>
              <a href="#placeholder" className="d-block myAncor w-100">
                {" "}
                Percheìè ci dovresti scegliere
              </a>
            </Col>
            <Col className="text-center mb-5">
              <h5 className="text-title">Ci trovi anche su:</h5>
              <a href="#placeholder" className="d-block myAncor w-100">
                Altro social
              </a>
              <a href="#placeholder" className="d-block myAncor w-100">
                Altro social
              </a>
            </Col>
            <Col className="text-center mb-5">
              <h5 className="text-title">Collaboriamo anche con:</h5>
              <a href="#placeholder" className="d-block myAncor w-100">
                amazon
              </a>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Myfooter;
