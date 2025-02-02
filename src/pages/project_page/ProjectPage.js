import React from "react";
import Particle from "../../Particle";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import nyc from "../../images/nyc.png";
import ci from "../../images/onboarding.png";
import hd from "../../images/hd.png";
import eco from "../../images/eco.png";
import pp from "../../images/book.png";
import meal from "../../images/meal.png";

import { FaCode } from "react-icons/fa";
export default function ProjectPage() {
  return (
    <section className="home-section">
      <Container fluid id="home">
        <Particle />
        <Container className="home-content">
          <div className="d-flex justify-content-center" width="100%">
            <Zoom left cascade>
              <h1 style={{ color: "rgb(134 61 176" }}>PROJECTS</h1>
            </Zoom>
          </div>
          <div>
            <div>
              <Container fluid className="certificate-section" id="about">
                <Container>
                  <Row>
                    <Col md={12} className="mt-5">
                      <Row className="g-5">
                        <Col md={3} className="col-sm-12 col-md-4">
                          <Fade bottom>
                            <div
                              key={1}
                              className="singleProject"
                              style={{
                                backgroundColor: "rgb(142 70 186 / 31%)",
                              }}
                            >
                              <div className="projectContent">
                                <h5 id={"first"} style={{ color: "white" }}>
                                  Movie-Pro
                                </h5>
                                <img src={nyc} alt={nyc} />
                                <div className="project--showcaseBtn">
                                  <a
                                    href={
                                      "https://github.com/Gultekinn/Movie-pro-"
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                    className={"iconBtn"}
                                    aria-labelledby={`code`}
                                  >
                                    <FaCode
                                      id={`code`}
                                      className={"icon"}
                                      aria-label="Code"
                                    />
                                  </a>
                                </div>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "rgba(0, 0, 0, 0.7)",
                                    color: "white",
                                    fontWeight: 600,
                                  }}
                                >
                                  Our platform makes booking movie tickets quick
                                  and easy, offering a wide selection of films
                                  for every taste.Get your tickets in just a few
                                  clicks and enjoy the latest blockbusters in
                                  the comfort of your local cinema.
                                </p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "rgba(0, 0, 0, 0.7)",
                                  color: "white",
                                  fontWeight: 600,
                                }}
                              >
                                JavaScript,ReactJs, MaterialUi,NodeJs,
                                ExpressJS,MongoDB
                              </div>
                            </div>
                          </Fade>
                        </Col>
                        <Col md={3} className="col-sm-12 col-md-4">
                          <Fade bottom>
                            <div
                              key={1}
                              className="singleProject"
                              style={{
                                backgroundColor: "rgb(142 70 186 / 31%)",
                              }}
                            >
                              <div className="projectContent">
                                <h5 id={"first"} style={{ color: "white" }}>
                                  Jewellery
                                </h5>
                                <img src={hd} alt={hd} />
                                <div className="project--showcaseBtn">
                                  <a
                                    href={
                                      "https://github.com/Gultekinn/Jewellry"
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                    className={"iconBtn"}
                                    aria-labelledby={`code`}
                                  >
                                    <FaCode
                                      id={`code`}
                                      className={"icon"}
                                      aria-label="Code"
                                    />
                                  </a>
                                </div>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "rgba(0, 0, 0, 0.7)",
                                    color: "white",
                                    fontWeight: 600,
                                  }}
                                >
                                  Jewellery Aid is a platform that allows users
                                  to design unique and personalized jewelry.
                                  This project offers a wide range of jewelry
                                  options to cater to people of all ages and
                                  preferences.
                                </p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "rgba(0, 0, 0, 0.7)",
                                  color: "white",
                                  fontWeight: 600,
                                }}
                              >
                                NextJs,TailwindCss, TypeScript,Nodejs,
                                ExpressJs,MongoDB
                              </div>
                            </div>
                          </Fade>
                        </Col>
                        <Col md={3} className="col-sm-12 col-md-4">
                          <Fade bottom>
                            <div
                              key={1}
                              className="singleProjectPage"
                              style={{
                                backgroundColor: "rgb(142 70 186 / 31%)",
                              }}
                            >
                              <div className="projectPageContent">
                                <h5 id={"first"} style={{ color: "white" }}>
                                  Portfolio
                                </h5>
                                <img src={ci} alt={ci} />
                                <div className="project--showcaseBtn">
                                  <a
                                    href={
                                      "https://github.com/Gultekinn/InternIntelligence_Portfolio"
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                    className={"iconBtn"}
                                    aria-labelledby={`code`}
                                  >
                                    <FaCode
                                      id={`code`}
                                      className={"icon"}
                                      aria-label="Code"
                                    />
                                  </a>
                                </div>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "rgba(0, 0, 0, 0.7)",
                                    color: "white",
                                    fontWeight: 600,
                                  }}
                                >
                                  Welcome to my personal portfolio. Explore my
                                  work, skills, and achievements in a concise
                                  and visually appealing format. Get a glimpse
                                  of my expertise and creativity.
                                </p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "rgba(0, 0, 0, 0.7)",
                                  color: "white",
                                  fontWeight: 600,
                                }}
                              >
                                HTML, CSS, SCSS, React, JavaScript,EmailJs
                              </div>
                            </div>
                          </Fade>
                        </Col>
                        <Col md={3} className="col-sm-12 col-md-4">
                          <Fade bottom>
                            <div
                              key={1}
                              className="singleProject"
                              style={{
                                backgroundColor: "rgb(142 70 186 / 31%)",
                              }}
                            >
                              <div className="projectContent">
                                <h5 id={"first"} style={{ color: "white" }}>
                                  LockIn
                                </h5>
                                <img src={eco} alt={eco} />
                                <div className="project--showcaseBtn">
                                  <a
                                    href={
                                      "https://github.com/Gultekinn/InternIntelligence_LockIn"
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                    className={"iconBtn"}
                                    aria-labelledby={`code`}
                                  >
                                    <FaCode
                                      id={`code`}
                                      className={"icon"}
                                      aria-label="Code"
                                    />
                                  </a>
                                </div>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "rgba(0, 0, 0, 0.7)",
                                    color: "white",
                                    fontWeight: 600,
                                  }}
                                >
                                  Effortlessly access your account or sign up to
                                  get started with just a few clicks. Log in to
                                  explore personalized features or register now
                                  to join our community.
                                </p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "rgba(0, 0, 0, 0.7)",
                                  color: "white",
                                  fontWeight: 600,
                                }}
                              >
                                HTML, TailwindCss, React, JavaScript ,FireBase,
                                Redux
                              </div>
                            </div>
                          </Fade>
                        </Col>
                        <Col md={3} className="col-sm-12 col-md-4">
                          <Fade bottom>
                            <div
                              key={1}
                              className="singleProject"
                              style={{
                                backgroundColor: "rgb(142 70 186 / 31%)",
                              }}
                            >
                              <div className="projectContent">
                                <h5 id={"first"} style={{ color: "white" }}>
                                  Book search
                                </h5>
                                <img src={pp} alt={pp} />
                                <div className="project--showcaseBtn">
                                  <a
                                    href={
                                      "https://github.com/Gultekinn/booksearch"
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                    className={"iconBtn"}
                                    aria-labelledby={`code`}
                                  >
                                    <FaCode
                                      id={`code`}
                                      className={"icon"}
                                      aria-label="Code"
                                    />
                                  </a>
                                </div>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "rgba(0, 0, 0, 0.7)",
                                    color: "white",
                                    fontWeight: 600,
                                  }}
                                >
                                  Book Search is a powerful tool that helps
                                  users easily find their favorite books from a
                                  vast collection. Discover your next great read
                                  with our user-friendly search platform
                                  tailored for book lovers.
                                </p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "rgba(0, 0, 0, 0.7)",
                                  color: "white",
                                  fontWeight: 600,
                                }}
                              >
                                HTML, CSS, JavaScript
                              </div>
                            </div>
                          </Fade>
                        </Col>
                        <Col md={3} className="col-sm-12 col-md-4">
                          <Fade bottom>
                            <div
                              key={1}
                              className="singleProject"
                              style={{
                                backgroundColor: "rgb(142 70 186 / 31%)",
                              }}
                            >
                              <div className="projectContent">
                                <h5 id={"first"} style={{ color: "white" }}>
                                  Timer
                                </h5>
                                <img src={meal} alt={meal} />
                                <div className="project--showcaseBtn">
                                  <a
                                    href={
                                      "https://github.com/Gultekinn/timer.js"
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                    className={"iconBtn"}
                                    aria-labelledby={`code`}
                                  >
                                    <FaCode
                                      id={`code`}
                                      className={"icon"}
                                      aria-label="Code"
                                    />
                                  </a>
                                </div>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "rgba(0, 0, 0, 0.7)",
                                    color: "white",
                                    fontWeight: 600,
                                  }}
                                >
                                  Timer is a sleek and efficient tool designed
                                  to help you manage your time effortlessly.
                                  Set, track, and manage your tasks with
                                  precision using our user-friendly timer
                                  application.
                                </p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "rgba(0, 0, 0, 0.7)",
                                  color: "white",
                                  fontWeight: 600,
                                }}
                              >
                                HTML, CSS, JavaScript
                              </div>
                            </div>
                          </Fade>
                        </Col>
                        <p>will continue...</p>
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </Container>
            </div>
          </div>
        </Container>
      </Container>
    </section>
  );
}
