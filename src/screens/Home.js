import { Col, Container, Row, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Fig from "../images/IMG_0009.JPG";
import htmlIcon from "../images/html.svg";
import cssIcon from "../images/css.svg";
import jsIcon from "../images/js.svg";
import reactIcon from "../images/react.svg";
import bootstrapIcon from "../images/bootstrap.svg";
import gitIcon from "../images/git.svg";
import nodeIcon from "../images/node.svg";
import mongoIcon from "../images/MongoDB_XriFIJg.png";
import typeIcon from "../images/ts.svg";
import graphIcon from "../images/Graph_QL.png";
import nestIcon from "../images/Nest_JS.png";
import engIcon from "../images/united-states-of-america-flag-medium.png";
import gerIcon from "../images/germany-flag-medium.png";
import korIcon from "../images/south-korea-flag-medium.png";
import pyIcon from "../images/python_l9Src2C_CyOJ4MD.png";
import sassIcon from "../images/sass.svg";
import figIcon from "../images/figma.svg";

const divStyle = {
  background:
    "linear-gradient(110deg, #6C757D, #6C757D 50%, #212529 50%, #212529)",
};

const textStyle = {
  letterSpacing: "1rem",
};

const iconStyle = {
  width: "3rem",
  height: "3rem",
};

const smallTitles =
  "mt-4 pt-3 pb-3 ps-3 text-center text-uppercase fs-2 fw-bold border border-dark border-4";
const rowClass = "m-0 d-flex flex-row align-items-center vh-100";
const colClass = "d-flex flex-column align-items-center";
const smallColClass = "d-flex flex-column align-items-center vh-100";

function Home() {
  return (
    <Container
      fluid
      className="vw-100 p-0 m-0 bg-secondary"
      data-bs-spy="scroll"
      data-bs-target="linked-navbar"
      data-bs-offset="0"
      tabindex="0"
    >
      <Container fluid id="home" lassName="home vw-100 p-0 m-0 bg-secondary">
        <Row fluid="md" style={divStyle} className={rowClass}>
          <Col className={colClass}>
            <span className="m-0 fs-4">I am</span>
            <span className="m-0 ps-4 fs-1">Hannes Cho</span>
          </Col>
          <Col className={colClass}>
            <Image src={Fig} width={250} height={250} roundedCircle />
          </Col>
        </Row>
        <Row className="m-0 p-5 bg-dark text-white fs-6 fw-light">
          I am a junior full-stack developer with a variety of experience and
          knowledge. I have extensive experience in working as a team with
          people with various backgrounds across regions and fields. I have
          worked with diverse scientists on research teams, military officials,
          and people with various age groups from students to elders, and have
          cultivated essential communication and interpersonal skills that
          enable me to collaborate with other people.
        </Row>
      </Container>
      <Row id="scrollspyHeading1" style={{ marginBottom: "4rem" }}></Row>
      <Container id="scrollspyHeading1" className="about-me">
        <Row fluid="md" className={rowClass}>
          <Col className={smallColClass}>
            <span className={smallTitles} style={textStyle}>
              About Me
            </span>
          </Col>
        </Row>
      </Container>
      <Row id="scrollspyHeading2" style={{ marginBottom: "4rem" }}></Row>
      <Container id="scrollspyHeading2" className="skills">
        <Row fluid="md" className={rowClass}>
          <Col className={smallColClass}>
            <span className={smallTitles} style={textStyle}>
              Skills
            </span>
            <Container className="d-flex flex-column">
              <Container className="using-now">
                <Row className="mt-4">
                  <span className="fs-3 fw-bold text-uppercase">
                    Using Now :
                  </span>
                </Row>
                <Row className="m-3">
                  <Col className={colClass}>
                    <Image src={htmlIcon} style={iconStyle} roundedCircle />
                    <span>HTML</span>
                  </Col>
                  <Col className={colClass}>
                    <Image src={cssIcon} style={iconStyle} roundedCircle />
                    <span>CSS</span>
                  </Col>
                  <Col className={colClass}>
                    <Image src={jsIcon} style={iconStyle} roundedCircle />
                    <span>JAVASCRIPT</span>
                  </Col>
                  <Col className={colClass}>
                    <Image src={typeIcon} style={iconStyle} roundedCircle />
                    <span>TYPESCRIPT</span>
                  </Col>
                </Row>
                <Row className="m-3">
                  <Col className={colClass}>
                    <Image src={reactIcon} style={iconStyle} roundedCircle />
                    <span>REACT</span>
                  </Col>
                  <Col className={colClass}>
                    <Image
                      src={bootstrapIcon}
                      style={iconStyle}
                      roundedCircle
                    />
                    <span>BOOTSTRAP</span>
                  </Col>
                  <Col className={colClass}>
                    <Image src={gitIcon} style={iconStyle} roundedCircle />
                    <span>Git</span>
                  </Col>
                  <Col className={colClass}>
                    <FontAwesomeIcon icon={faGithub} style={iconStyle} />
                    <span>Github</span>
                  </Col>
                </Row>
                <Row className="m-3">
                  <Col className={colClass}>
                    <Image src={nodeIcon} style={iconStyle} roundedCircle />
                    <span>NodeJS</span>
                  </Col>
                  <Col className={colClass}>
                    <Image src={mongoIcon} style={iconStyle} roundedCircle />
                    <span>MongoDB</span>
                  </Col>
                  <Col className={colClass}>
                    <Image src={graphIcon} style={iconStyle} roundedCircle />
                    <span>GraphQL</span>
                  </Col>
                  <Col className={colClass}>
                    <Image src={nestIcon} style={iconStyle} roundedCircle />
                    <span>NestJS</span>
                  </Col>
                </Row>
              </Container>
              <Container className="learing-now">
                <Row className="mt-4">
                  <span className="fs-3 fw-bold text-uppercase">
                    Learing Now :
                  </span>
                </Row>
                <Row className="m-3">
                  <Col className={colClass}>
                    <Image src={sassIcon} style={iconStyle} roundedCircle />
                    <span>SASS</span>
                  </Col>
                  <Col className={colClass}>
                    <Image src={figIcon} style={iconStyle} roundedCircle />
                    <span>Figma</span>
                  </Col>
                  <Col className={colClass}></Col>
                  <Col className={colClass}></Col>
                </Row>
              </Container>
              <Container className="other-skills">
                <Row className="mt-4">
                  <span className="fs-3 fw-bold text-uppercase">
                    Other Skills:
                  </span>
                </Row>
                <Row className="m-3">
                  <Col className={colClass}>
                    <Image src={korIcon} style={iconStyle} roundedCircle />
                    <span>Korean</span>
                  </Col>
                  <Col className={colClass}>
                    <Image src={engIcon} style={iconStyle} roundedCircle />
                    <span>English</span>
                  </Col>
                  <Col className={colClass}>
                    <Image src={gerIcon} style={iconStyle} roundedCircle />
                    <span>German</span>
                  </Col>
                  <Col className={colClass}>
                    <Image src={pyIcon} style={iconStyle} roundedCircle />
                    <span>python</span>
                  </Col>
                </Row>
              </Container>
            </Container>
          </Col>
        </Row>
      </Container>
      <Row id="scrollspyHeading3" style={{ marginBottom: "4rem" }}></Row>
      <Container id="scrollspyHeading3" className="projects">
        <Row fluid="md" className={rowClass}>
          <Col className={smallColClass}>
            <span className={smallTitles} style={textStyle}>
              PROJECTS
            </span>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home;
