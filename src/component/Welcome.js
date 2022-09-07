import { Container, Row, Col, Button } from "react-bootstrap"

const Welcome = () => {
  return (
    <div className="welcome">
      <Container className="d-flex justify-content-center">
        <Row>
          <Col>
            <div className="quotes">Good Books</div>
            <div className="quotes">Brings Good Innovation</div>
            <div className="introButton mt-5 text-center">
              <Button color="#ff5c5c" variant="dark">
                Learn More
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Welcome
