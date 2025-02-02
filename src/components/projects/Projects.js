import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import nyc from "../../images/nyc.png";
import ci from "../../images/onboarding.png";
import hd from "../../images/hd.png";
import eco from "../../images/eco.png";
import { FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

export default function Projects() {
  return (
    <div>
      <Container fluid className="certificate-section" id="about">
        <Container>
          <Row>
            <Col
              md={12}
              className="certificate-description d-flex justify-content-start"
            >
              <Zoom left cascade>
                <h1 className="aboutme-heading">Projects</h1>
              </Zoom>
            </Col>
            <Col md={3}>
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
                Our platform makes booking movie tickets
                                  quick and easy, offering a wide selection of
                                  films for every taste.Get your tickets in
                                  just a few clicks and enjoy the latest
                                  blockbusters in the comfort of your local
                                  cinema.
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
            <Col md={3}>
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
                     NextJs,TailwindCss, TypeScript, Nodejs,
                     ExpressJs,MongoDB
                  </div>
                </div>
              </Fade>
            </Col>
            <Col md={3}>
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
 Welcome to my personal portfolio. Explore my work, skills, 
 and achievements in a concise and visually appealing format. 
 Get a glimpse of my expertise and creativity.

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
                  HTML, CSS, SCSS, React, JavaScript
                  </div>
                </div>
              </Fade>
            </Col>
            <Col md={3}>
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
                        href={ "https://github.com/Gultekinn/InternIntelligence_LockIn"
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
                     Effortlessly access your account or sign up to get started with just a few clicks.
Secure and easy login options ensure you can access your account anytime, anywhere.
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
                      HTML, TailwindCss, React,  JavaScript,
                      FireBase,Redux
                  </div>
                </div>
              </Fade>
            </Col>
          </Row>
          <div className="blog--viewAll">
            <Link to="/projectspage">
              <button className="btn btn-primary">
                View All
                <HiArrowRight className="viewArr" />
              </button>
            </Link>
          </div>
        </Container>
      </Container>
    </div>
  );
}
