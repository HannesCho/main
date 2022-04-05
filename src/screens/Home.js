import { Col, Container, Row, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faLinkedinIn,
  faMailchimp,
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
  separator,
} from "../images/images.js";
import { faEnvelope, faMailBulk } from "@fortawesome/free-solid-svg-icons";

const divStyle = {
  background:
    "linear-gradient(110deg, #6C757D, #6C757D 50%, #212529 50%, #212529)",
};

const textStyle = {
  letterSpacing: "1rem",
  marginBottom: "2rem",
};

const iconStyle = {
  width: "3rem",
  height: "3rem",
};
const sepStyle = {
  margin: "2rem",
};

const smallTitles =
  "mt-4 pt-3 pb-3 ps-3 text-center text-uppercase fs-2 fw-bold border border-dark border-4";
const rowClass = "m-0 d-flex flex-row align-items-center min-vh-100";
const colClass = "d-flex flex-column align-items-center min-vh-100";
const smallColClass = "d-flex flex-column align-items-center";

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
      <Container
        fluid
        id="home"
        className="home vw-100 vh-100 p-0 m-0 bg-secondary"
      >
        <Row
          fluid="md"
          style={divStyle}
          className="m-0 d-flex flex-row align-items-center h-75"
        >
          <Col className="d-flex flex-column">
            <span className="m-0 ps-4 fs-6 text-start">
              I am a Web Developer
            </span>
            <span className="m-0 fs-1 text-center">Hannes Cho</span>
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
                  icon={faLinkedin}
                  style={{ width: "2rem", height: "2rem", color: "#0A66C2" }}
                />
              </a>
              <a href="mailto:hoonsungcho11@gmail.com">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ width: "2rem", height: "2rem", color: "black" }}
                />
              </a>
            </div>
          </Col>
          <Col className={smallColClass}>
            <Image src={bgImage} width={250} height={250} roundedCircle />
          </Col>
        </Row>
      </Container>
      <Row
        id="scrollspyHeading1"
        style={sepStyle}
        className="d-flex justify-content-center"
      >
        <Image src={separator} style={{ width: "10rem" }} />
      </Row>
      <Container className="about-me d-flex flex-column">
        <Row fluid="md" className={rowClass}>
          <Col className={colClass}>
            <span className={smallTitles} style={textStyle}>
              About Me
            </span>
            <Container className="mt-4">
              <Row fluid="md" className="fs-5">
                <p style={{ textIndent: "3ch" }}>
                  I am a junior web developer with a variety of experience and
                  knowledge.
                </p>
                <p style={{ textIndent: "3ch" }}>
                  I have extensive experience in working as a team with people
                  with various backgrounds across regions and fields. I have
                  worked with diverse scientists on research teams, military
                  officials, and people with various age groups from students to
                  elders, and have cultivated essential communication and
                  interpersonal skills that enable me to collaborate with other
                  people.
                </p>
                <p style={{ textIndent: "3ch" }}>
                  More than 8 years of studies in science rendered me
                  exceptional analytical and problem-solving skills as well as
                  critical reasoning skills. 2 years of mandatory military
                  service in South Korea elevated my ability to work under high
                  pressure and deliver results on time to impeccable standards.
                  Through volunteer work in the bible school and church, I have
                  gained valuable experience in mentoring students, supervising
                  teams, and facilitating events as a leader.
                </p>
                <p style={{ textIndent: "3ch" }}>
                  I enjoy learning new things as well as facing challenges and
                  that is why I am so passionate about software development. It
                  always challenges me, and I enjoy the process of finding a new
                  way of solving problems. Through self-teaching and boot camp,
                  I have expanded my capacity to retain new things quickly and
                  become a proactive learner.
                </p>
                <p style={{ textIndent: "3ch" }}>
                  I believe all my skills and experience coupled with software
                  development skills would be valuable assets to my future team
                  and company.
                </p>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
      <Row
        id="scrollspyHeading2"
        style={sepStyle}
        className="d-flex justify-content-center"
      >
        <Image src={separator} style={{ width: "10rem" }} />
      </Row>
      <Container className="skills">
        <Row fluid="md" className={rowClass}>
          <Col className={colClass}>
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
                  <Col className={smallColClass}>
                    <Image src={htmlIcon} style={iconStyle} roundedCircle />
                    <span>HTML</span>
                  </Col>
                  <Col className={smallColClass}>
                    <Image src={cssIcon} style={iconStyle} roundedCircle />
                    <span>CSS</span>
                  </Col>
                  <Col className={smallColClass}>
                    <Image src={jsIcon} style={iconStyle} roundedCircle />
                    <span>JAVASCRIPT</span>
                  </Col>
                  <Col className={smallColClass}>
                    <Image src={typeIcon} style={iconStyle} roundedCircle />
                    <span>TYPESCRIPT</span>
                  </Col>
                </Row>
                <Row className="m-3">
                  <Col className={smallColClass}>
                    <Image src={reactIcon} style={iconStyle} roundedCircle />
                    <span>REACT</span>
                  </Col>
                  <Col className={smallColClass}>
                    <Image
                      src={bootstrapIcon}
                      style={iconStyle}
                      roundedCircle
                    />
                    <span>BOOTSTRAP</span>
                  </Col>
                  <Col className={smallColClass}>
                    <Image src={gitIcon} style={iconStyle} roundedCircle />
                    <span>Git</span>
                  </Col>
                  <Col className={smallColClass}>
                    <FontAwesomeIcon icon={faGithub} style={iconStyle} />
                    <span>Github</span>
                  </Col>
                </Row>
                <Row className="m-3">
                  <Col className={smallColClass}>
                    <Image src={nodeIcon} style={iconStyle} roundedCircle />
                    <span>NodeJS</span>
                  </Col>
                  <Col className={smallColClass}>
                    <Image src={mongoIcon} style={iconStyle} roundedCircle />
                    <span>MongoDB</span>
                  </Col>
                  <Col className={smallColClass}>
                    <Image src={graphIcon} style={iconStyle} roundedCircle />
                    <span>GraphQL</span>
                  </Col>
                  <Col className={smallColClass}>
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
                  <Col className={smallColClass}>
                    <Image src={sassIcon} style={iconStyle} roundedCircle />
                    <span>SASS</span>
                  </Col>
                  <Col className={smallColClass}>
                    <Image src={figIcon} style={iconStyle} roundedCircle />
                    <span>Figma</span>
                  </Col>
                  <Col className={smallColClass}></Col>
                  <Col className={smallColClass}></Col>
                </Row>
              </Container>
              <Container className="other-skills">
                <Row className="mt-4">
                  <span className="fs-3 fw-bold text-uppercase">
                    Other Skills:
                  </span>
                </Row>
                <Row className="m-3">
                  <Col className={smallColClass}>
                    <Image src={korIcon} style={iconStyle} roundedCircle />
                    <span>Korean</span>
                  </Col>
                  <Col className={smallColClass}>
                    <Image src={engIcon} style={iconStyle} roundedCircle />
                    <span>English</span>
                  </Col>
                  <Col className={smallColClass}>
                    <Image src={gerIcon} style={iconStyle} roundedCircle />
                    <span>German</span>
                  </Col>
                  <Col className={smallColClass}>
                    <Image src={pyIcon} style={iconStyle} roundedCircle />
                    <span>python</span>
                  </Col>
                </Row>
              </Container>
            </Container>
          </Col>
        </Row>
      </Container>
      <Row
        id="scrollspyHeading3"
        style={sepStyle}
        className="d-flex justify-content-center"
      >
        <Image src={separator} style={{ width: "10rem" }} />
      </Row>
      <Container className="projects">
        <Row fluid="md" className={rowClass}>
          <Col className={colClass}>
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
