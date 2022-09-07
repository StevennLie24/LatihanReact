import { Container, Row, Col, Card, Image, Button } from "react-bootstrap"
import patientImage from "../assets/images/novel/patient.jpg"
import blackImage from "../assets/images/novel/blackhouse.jpg"
import delivImage from "../assets/images/novel/delivereance.jpg"
import newImage from "../assets/images/novel/newworld.jpg"
import settingImage from "../assets/images/novel/settingsun.jpg"
import snowImage from "../assets/images/novel/snowman.jpg"

const Novel = () => {
  return (
    <div>
      <Container>
        <Row>
          <Card.Text className="typeTitle mt-5" id="novel">
            Novel
          </Card.Text>
          <Col>
            <div>
              <Card className="bg-white novelPage mt-5">
                <Image
                  src={patientImage}
                  alt="Novel image"
                  width="300px"
                  height="400px"
                />
                <Card.Title className="text-center mt-2">
                  The Silent Patient
                </Card.Title>
                <Card.Text className="text-center">
                  by Alex Michaelides
                </Card.Text>
                <Card.Text className="text-center">
                  Crime, Psychological, Mystery
                </Card.Text>
                <Button>Read Book</Button>
              </Card>
            </div>
          </Col>
          <Col>
            <div>
              <Card className="bg-white novelPage mt-5">
                <Image
                  src={blackImage}
                  alt="Novel image"
                  width="300px"
                  height="400px"
                />
                <Card.Title className="text-center mt-2">
                  Black House
                </Card.Title>
                <Card.Text className="text-center">by Patrick Kellan</Card.Text>
                <Card.Text className="text-center">Horror, Mystery</Card.Text>
                <Button>Read Book</Button>
              </Card>
            </div>
          </Col>
          <Col>
            <div>
              <Card className="bg-white novelPage mt-5">
                <Image
                  src={delivImage}
                  alt="Novel image"
                  width="300px"
                  height="400px"
                />
                <Card.Title className="text-center mt-2">
                  Deliverance
                </Card.Title>
                <Card.Text className="text-center">by James Dickey</Card.Text>
                <Card.Text className="text-center">
                  Psychological, Adventure
                </Card.Text>
                <Button>Read Book</Button>
              </Card>
            </div>
          </Col>
          <Col>
            <div>
              <Card className="bg-white novelPage mt-5">
                <Image
                  src={newImage}
                  alt="Novel image"
                  width="300px"
                  height="400px"
                />
                <Card.Title className="text-center mt-2">
                  Brave New World
                </Card.Title>
                <Card.Text className="text-center">by Aldous Huxley</Card.Text>
                <Card.Text className="text-center">Sci-Fi</Card.Text>
                <Button>Read Book</Button>
              </Card>
            </div>
          </Col>
          <Col>
            <div>
              <Card className="bg-white novelPage mt-5">
                <Image
                  src={settingImage}
                  alt="Novel image"
                  width="300px"
                  height="400px"
                />
                <Card.Title className="text-center mt-2">
                  The Setting Sun
                </Card.Title>
                <Card.Text className="text-center">by Osamu Dazai</Card.Text>
                <Card.Text className="text-center">
                  Fiction, Slice of Life
                </Card.Text>
                <Button>Read Book</Button>
              </Card>
            </div>
          </Col>
          <Col>
            <div>
              <Card className="bg-white novelPage mt-5">
                <Image
                  src={snowImage}
                  alt="Novel image"
                  width="300px"
                  height="400px"
                />
                <Card.Title className="text-center mt-2">
                  The Snowman
                </Card.Title>
                <Card.Text className="text-center">by Jo Nesbo</Card.Text>
                <Card.Text className="text-center">
                  Crime, Horror, Mystery
                </Card.Text>
                <Button>Read Book</Button>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Novel
