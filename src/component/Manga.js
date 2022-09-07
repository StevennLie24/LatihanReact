import { Container, Row, Col, Card, Image, Button } from "react-bootstrap"
import monsterImage from "../assets/images/manga/monster.jpg"
import narutoImage from "../assets/images/manga/naruto.jpg"
import kurokoImage from "../assets/images/manga/kuroko.jpg"
import steinsImage from "../assets/images/manga/steins.jpg"
import oneImage from "../assets/images/manga/one.jpg"
import grandImage from "../assets/images/manga/grand.jpg"

const Manga = () => {
  return (
    <div>
      <Container>
        <Row>
          <Card.Text className="typeTitle mt-5 text-white" id="manga">
            Manga
          </Card.Text>
          <Col>
            <div>
              <Card className="bg-white novelPage mt-5">
                <Image
                  src={monsterImage}
                  alt="Novel image"
                  width="300px"
                  height="400px"
                />
                <Card.Title className="text-center mt-2">Monster</Card.Title>
                <Card.Text className="text-center">by Naoki Urasawa</Card.Text>
                <Card.Text className="text-center">Crime, Mystery</Card.Text>
                <Button>Read Book</Button>
              </Card>
            </div>
          </Col>
          <Col>
            <div>
              <Card className="bg-white novelPage mt-5">
                <Image
                  src={narutoImage}
                  alt="Novel image"
                  width="300px"
                  height="400px"
                />
                <Card.Title className="text-center mt-2">Naruto</Card.Title>
                <Card.Text className="text-center">
                  by Masashi Kishimoto
                </Card.Text>
                <Card.Text className="text-center">
                  Adventure, Action, Fantasy
                </Card.Text>
                <Button>Read Book</Button>
              </Card>
            </div>
          </Col>
          <Col>
            <div>
              <Card className="bg-white novelPage mt-5">
                <Image
                  src={kurokoImage}
                  alt="Novel image"
                  width="300px"
                  height="400px"
                />
                <Card.Title className="text-center mt-2">
                  Kuroko No Basuke
                </Card.Title>
                <Card.Text className="text-center">
                  by Tadatoshi Fujimaki
                </Card.Text>
                <Card.Text className="text-center"> Comedy, Sports</Card.Text>
                <Button>Read Book</Button>
              </Card>
            </div>
          </Col>
          <Col>
            <div>
              <Card className="bg-white novelPage mt-5">
                <Image
                  src={steinsImage}
                  alt="Novel image"
                  width="300px"
                  height="400px"
                />
                <Card.Title className="text-center mt-2">
                  Steins Gate
                </Card.Title>
                <Card.Text className="text-center">by Takeshi Abo</Card.Text>
                <Card.Text className="text-center">Sci-Fi, Drama</Card.Text>
                <Button>Read Book</Button>
              </Card>
            </div>
          </Col>
          <Col>
            <div>
              <Card className="bg-white novelPage mt-5">
                <Image
                  src={oneImage}
                  alt="Novel image"
                  width="300px"
                  height="400px"
                />
                <Card.Title className="text-center mt-2">One Piece</Card.Title>
                <Card.Text className="text-center">by Eiichiro Oda</Card.Text>
                <Card.Text className="text-center">
                  Adventure, Action, Fantasy
                </Card.Text>
                <Button>Read Book</Button>
              </Card>
            </div>
          </Col>
          <Col>
            <div>
              <Card className="bg-white novelPage mt-5">
                <Image
                  src={grandImage}
                  alt="Novel image"
                  width="300px"
                  height="400px"
                />
                <Card.Title className="text-center mt-2">Grand Blue</Card.Title>
                <Card.Text className="text-center">by Kenji Inoue</Card.Text>
                <Card.Text className="text-center">Comedy</Card.Text>
                <Button>Read Book</Button>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Manga
