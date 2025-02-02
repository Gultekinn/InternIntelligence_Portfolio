import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
const About = () => {
  return (
    <div>
      <Container>
        <Row className="mt-5">
          <Col md={5}>
            <Slide left>
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json"
                background="transparent"
                speed="1"
                style={{ width: "100%", height: "90%" }}
                loop
                autoplay
              ></lottie-player>
            </Slide>
          </Col>

          <Col md={7}>
            <Fade duration={3000}>
              <p className="home-about-body">
                My name is <b className="purple"> Gultakin Azizova </b>
                and I am a{" "}
                <b className="purple">
                  {" "}
                  Applied mathematics and cybernetics Faculty | Informatics
                  teacher
                </b>{" "}
                student at <b className="purple">Baku State University </b>
                in Baku, Azerbaijan.
                <br />
                <br />
                Good knowledge on tool  &nbsp;
                <b className="purple">  Visual Studio, Visual Studio Code, Postman.
                </b>
                <br />
                <br />
                Experience of working on &nbsp;
                <b className="purple">
                  {" "}
                  Bootstrap, Material UI , AntDesign,ChakraUI,Tailwind css.{" "}
                </b>
                <br />
                <br />
                Skilled in developing systems built on &nbsp;
                <b className="purple">
                  {" "}
                 FireBase, MongoDB , Mongoose, Redux Toolkit, Context.{" "}
                </b>
                <br />
                <br />
                Active used and I have project &nbsp;
                <b className="purple">
                  {" "}
                  ReactJs, Node Js ,Next Js ExpressJs, JavaScript,TypeScript,HTML5, CSS3, SASS. .{" "}
                </b>
                <br />
                <br />
                Whenever possible, I also apply my passion for developing
                products with &nbsp;
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks.
                </b>
                <br />
                <br />
                In my free time, I enjoy learning new technologies and &nbsp;
                <b className="purple">
                  building new web technologies and products.{" "}
                </b>
              </p>
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
