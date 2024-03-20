import { Col, Container, Row, Image, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  bgImage,
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  bootstrapIcon,
  gitIcon,
  nodeIcon,
  mongoIcon,
  typeIcon,
  graphIcon,
  nestIcon,
  engIcon,
  gerIcon,
  korIcon,
  pyIcon,
  sassIcon,
  figIcon,
  hrmanager,
  cal,
  factory,
  Avocado,
  jeurope,
  express,
  mariadb,
  mysql,
  jest,
} from "../images.js";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const divStyle = {
  background: "white",
};

const halloStyle = {
  background: "white",
  color: "#5C64CF",
  fontSize: "25px",
  width: "100px",
  transform: "rotate(-30deg)",
  border: "2px solid #5C64CF",
  textAlign: "center",
};

const textStyle = {
  letterSpacing: "1rem",
  marginBottom: "2rem",
};

const iconStyle = {
  width: "3rem",
  height: "3rem",
};

const cardStyle = {
  width: "100%",
  height: "100%",
  position: "relative",
};

const smallTitles = "mt-4 pt-3 pb-3 ps-3 text-start text-uppercase h1 fw-bold";
const rowClass = "m-0 d-flex flex-row align-items-center min-vh-100";
const colClass = "d-flex flex-column align-items-center min-vh-100";
const smallColClass = "mt-2 d-flex flex-inline align-items-center";

function Home() {
  return (
    <Container
      fluid
      className="vw-100 p-0 m-0 bg-white"
      data-bs-spy="scroll"
      data-bs-target="linked-navbar"
      data-bs-offset="0"
      tabindex="0"
    >
      <Container
        fluid
        id="home"
        className="home vw-100 vh-100 p-0 m-0 bg-white"
      >
        <Row
          fluid="md"
          style={divStyle}
          className="m-0 d-flex flex-row align-items-center h-100"
        >
          <Col className="ms-4 d-flex flex-column align-items-end">
            <div className="me-4 d-flex flex-column" style={{ width: "500px" }}>
              <div style={halloStyle}>Hallo!</div>
              <br></br>
              <span className="ml-3 ps-4 h1 text-start">
                Unleashing innovation at the crossroads of science and software:
              </span>
              <span className="m-2 ps-4 h3 text-start">
                I'm here to redefine your digital experience with every line of
                code.
              </span>
              <div className="d-flex flex-row align-items-center justify-content-center w-100 mt-5">
                <a href="https://github.com/HannesCho/" className="me-3">
                  <FontAwesomeIcon
                    icon={faGithub}
                    style={{ width: "2rem", height: "2rem", color: "black" }}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/hoonsungcho/"
                  className="me-3"
                >
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    style={{
                      width: "1.8rem",
                      height: "1.8rem",
                      color: "white",
                      backgroundColor: "#0A66C2",
                      borderRadius: "10%",
                    }}
                  />
                </a>
                <a href="mailto:hoonsungcho11@gmail.com">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ width: "2rem", height: "2rem", color: "black" }}
                  />
                </a>
              </div>
            </div>
          </Col>
          <Col className="mt-2 d-flex flex-colum align-items-center">
            <div
              className="d-flex flex-column align-items-center border border-dark border-3"
              style={{ width: "500px", height: "500px" }}
            >
              <Image src={bgImage} width={"100%"} height={"100%"} />
            </div>
          </Col>
        </Row>
      </Container>
      <Row id="aboutme"></Row>
      <Container className="about-me d-flex flex-column pt-5 mt-2">
        <Row fluid="md" className={rowClass}>
          <Col className={colClass}>
            <span className={smallTitles} style={textStyle}>
              My story
            </span>
            <Container className="mt-4">
              <Row fluid="md" className="fs-5">
                <p style={{ textIndent: "3ch" }}>
                  In the heart of Berlin, there lived a curious mind with a
                  degree in Biochemistry from the Free University of Berlin.
                  This individual, whose days had once been filled with the
                  study of life's microscopic details, found himself drawn to a
                  vastly different world: software development. His journey from
                  biochemistry to tech was not a common path, but it was one
                  that showcased his unwavering passion for learning and
                  problem-solving.
                </p>
                <p style={{ textIndent: "3ch" }}>
                  As he ventured into this new realm, he brought with him a
                  unique set of skills honed through years of strategic planning
                  and team collaboration. Nights spent immersed in coding boot
                  camps and self-study sessions transformed this eager learner
                  into a proficient software developer, skilled in languages
                  like JavaScript and Python, and frameworks such as ReactJS and
                  Django.
                </p>
                <p style={{ textIndent: "3ch" }}>
                  One of his crowning achievements was the transformation of an
                  e-commerce website. This wasn't just a project; it was his
                  mission to enhance accessibility and user experience. By
                  redesigning the layout, enriching product descriptions, and
                  integrating user-friendly features, he managed to increase
                  visitor numbers by 30% and boost sales by 10%. This
                  achievement reflects his strong commitment to positively
                  impacting the digital landscape, one thoughtful line of code
                  at a time.
                </p>
                <p style={{ textIndent: "3ch" }}>
                  Now, as he seeks new challenges and opportunities to grow, he
                  stands at the threshold of the next chapter, ready to
                  contribute his blend of analytical prowess and technical skill
                  to the world of software development. This is not just a
                  transition from one career to another; it's a journey of
                  transformation, driven by a passion to explore, learn, and
                  innovate.
                </p>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
      <Row id="skills"></Row>
      <Container className="skills pt-5 mt-2">
        <Row fluid="md" className={rowClass}>
          <Col className={colClass}>
            <span className={smallTitles} style={textStyle}>
              Skills
            </span>
            <Container className="d-flex flex-column">
              <Container className="skill-con">
                <Row className="mt-4">
                  <span className="h4 fw-bold text-uppercase">
                    Programming Languages
                  </span>
                </Row>
                <Row md={4} sm={2} xs={2} className="m-1">
                  <Col className={smallColClass}>
                    <Image src={htmlIcon} style={iconStyle} roundedCircle />
                    <span className="ms-2 h5">HTML</span>
                  </Col>
                  <Col className={smallColClass}>
                    <Image src={cssIcon} style={iconStyle} roundedCircle />
                    <span className="ms-2 h5">CSS</span>
                  </Col>
                  <Col className={smallColClass}>
                    <Image src={sassIcon} style={iconStyle} roundedCircle />
                    <span className="ms-2 h5">SASS</span>
                  </Col>
                  <Col className={smallColClass}>
                    <Image src={jsIcon} style={iconStyle} roundedCircle />
                    <span className="ms-2 h5">JAVASCRIPT</span>
                  </Col>
                </Row>
                <Row md={4} sm={2} xs={2} className="m-1">
                  <Col className={smallColClass}>
                    <Image src={typeIcon} style={iconStyle} roundedCircle />
                    <span className="ms-2 h5">TYPESCRIPT</span>
                  </Col>
                  <Col className={smallColClass}>
                    <Image src={pyIcon} style={iconStyle} roundedCircle />
                    <span className="ms-2 h5">Python</span>
                  </Col>
                </Row>
              </Container>
              <Container className="skill-con">
                <Row className="mt-4">
                  <span className="h4 fw-bold text-uppercase">
                    Frameworks & Libraries
                  </span>
                </Row>
                <Row md={4} sm={2} xs={2} className="m-1">
                  <Col className={smallColClass}>
                    <Image src={reactIcon} style={iconStyle} roundedCircle />
                    <span className="ms-2 h5">REACT</span>
                  </Col>
                  <Col className={smallColClass}>
                    <Image src={nestIcon} style={iconStyle} roundedCircle />
                    <span className="ms-2 h5">NestJS</span>
                  </Col>
                  <Col className={smallColClass}>
                    <Image
                      src={bootstrapIcon}
                      style={iconStyle}
                      roundedCircle
                    />
                    <span className="ms-2 h5">BOOTSTRAP</span>
                  </Col>
                  <Col className={smallColClass}>
                    <Image src={graphIcon} style={iconStyle} roundedCircle />
                    <span className="ms-2 h5">GraphQL</span>
                  </Col>
                  <Col className={smallColClass}></Col>
                </Row>
              </Container>
              <Container className="skill-con">
                <Row className="mt-4">
                  <span className="h4 fw-bold text-uppercase">Database</span>
                </Row>
                <Row md={4} sm={2} xs={2} className="m-1">
                  <Col className={smallColClass}>
                    <Image src={mongoIcon} style={iconStyle} roundedCircle />
                    <span className="ms-2 h5">MongoDB</span>
                  </Col>
                  <Col className={smallColClass}>
                    <Image src={graphIcon} style={iconStyle} roundedCircle />
                    <span className="ms-2 h5">GraphQL</span>
                  </Col>
                  <Col className={smallColClass}>
                    <Image src={mariadb} style={iconStyle} roundedCircle />
                    <span className="ms-2 h5">MariaDB</span>
                  </Col>
                  <Col className={smallColClass}>
                    <Image src={mysql} style={iconStyle} roundedCircle />
                    <span className="ms-2 h5">MySQL</span>
                  </Col>
                </Row>
              </Container>
              <Container className="skill-con">
                <Row className="mt-4">
                  <span className="h4 fw-bold text-uppercase">Others </span>
                </Row>

                <Row md={4} sm={2} xs={2} className="m-1">
                  <Col className={smallColClass}>
                    <Image src={gitIcon} style={iconStyle} roundedCircle />
                    <span className="ms-2 h5">Git</span>
                  </Col>
                  <Col className={smallColClass}>
                    <FontAwesomeIcon icon={faGithub} style={iconStyle} />
                    <span className="ms-2 h5">Github</span>
                  </Col>
                  <Col className={smallColClass}>
                    <Image src={nodeIcon} style={iconStyle} roundedCircle />
                    <span className="ms-2 h5">NodeJS</span>
                  </Col>
                  <Col className={smallColClass}>
                    <Image src={figIcon} style={iconStyle} roundedCircle />
                    <span className="ms-2 h5">Figma</span>
                  </Col>
                </Row>
              </Container>
              <Container className="skill-con">
                <Row className="mt-4">
                  <span className="h4 fw-bold text-uppercase">
                    Language Skills
                  </span>
                </Row>
                <Row md={4} sm={2} xs={2} className="m-1">
                  <Col className={smallColClass}>
                    <Image src={korIcon} style={iconStyle} roundedCircle />
                    <span className="ms-2 h5">Korean</span>
                  </Col>
                  <Col className={smallColClass}>
                    <Image src={engIcon} style={iconStyle} roundedCircle />
                    <span className="ms-2 h5">English</span>
                  </Col>
                  <Col className={smallColClass}>
                    <Image src={gerIcon} style={iconStyle} roundedCircle />
                    <span className="ms-2 h5">German</span>
                  </Col>
                </Row>
              </Container>
            </Container>
          </Col>
        </Row>
      </Container>
      <Row id="projects"></Row>
      <Container className="projects pt-4 mt-2">
        <Row fluid="md" className={rowClass}>
          <Col className={colClass}>
            <span className={smallTitles} style={textStyle}>
              PROJECTS
            </span>
            <Row md={3} sm={2} xs={2} xxs={1}>
              {/* ["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"] */}
              <Col className={smallColClass}>
                <Card style={cardStyle}>
                  <Card.Img
                    variant="top"
                    src={cal}
                    style={{ height: "150px" }}
                  />
                  <Card.Body>
                    <Card.Title>Delivery Fee Calculator</Card.Title>
                    <Card.Text>
                      Web application to calculate the delivery fee.
                    </Card.Text>
                    <Button
                      variant="primary"
                      href="http://woltcal.hannesstudio.com/"
                    >
                      To the site
                    </Button>
                    <Button
                      className="m-2"
                      variant="primary"
                      href="https://github.com/HannesCho/Wolt-Delivery-Fee-Calculator/"
                    >
                      Code
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col className={smallColClass}>
                <Card style={cardStyle}>
                  <Card.Img
                    variant="top"
                    src={hrmanager}
                    style={{ height: "150px" }}
                  />
                  <Card.Body>
                    <Card.Title>HR Manager</Card.Title>
                    <Card.Text>
                      Web application for the HR department to manage employees.
                    </Card.Text>
                    <Button
                      variant="primary"
                      href="http://hrmanager.hannesstudio.com"
                    >
                      To the site
                    </Button>
                    <Button
                      className="m-2"
                      variant="primary"
                      href="https://github.com/HannesCho/HR_Manager"
                    >
                      Code
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col className={smallColClass}>
                <Card style={cardStyle}>
                  <Card.Img
                    variant="top"
                    src={factory}
                    style={{ height: "150px" }}
                  />
                  <Card.Body>
                    <Card.Title>123 Factory.de</Card.Title>
                    <Card.Text>
                      Using a CMS to modify and update a website.
                    </Card.Text>
                    <Button variant="primary" href="https://www.123factory.de/">
                      To the site
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="mt-4 d-flex flex-inline align-items-center">
                <Card style={cardStyle}>
                  <Card.Img
                    variant="top"
                    src={Avocado}
                    style={{ height: "150px" }}
                  />
                  <Card.Body>
                    <Card.Title>avocadocom.eu</Card.Title>
                    <Card.Text>
                      Using a CMS to modify and update a website.
                    </Card.Text>
                    <Button variant="primary" href="https://avocadocom.eu/">
                      To the site
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="mt-4 d-flex flex-inline align-items-center">
                <Card style={cardStyle}>
                  <Card.Img
                    variant="top"
                    src={jeurope}
                    style={{ height: "150px" }}
                  />
                  <Card.Body>
                    <Card.Title>j-europe.com</Card.Title>
                    <Card.Text>
                      Using a CMS to modify and update a website.
                    </Card.Text>
                    <Button
                      variant="primary"
                      href="https://j-europe.com/jdproduct/"
                    >
                      To the site
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home;
