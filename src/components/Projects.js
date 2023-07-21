/* eslint-disable jsx-a11y/alt-text */
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.jpg";
import projImg10 from "../assets/img/project-img10.jpg";
import projImg11 from "../assets/img/project-img11.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';




export const Projects = () => {

  const projects = [
    {
      title: "Personal Finance",
      description: "ReactJS, NodeJS, ExpressJS, MongoDB",
      imgUrl: projImg1,
      
    },
    {
      title: "Fit100 - Healthcare Application",
      description: "React Native, Expo, Mongodb, Google Api's",
      imgUrl: projImg2,
    },
    {
      title: "LOOK UP - App",
      description: "React Native, Expo, Mongodb",
      imgUrl: projImg3,
    },
    {
      title: "Sales Analysis",
      description: "Python",
      imgUrl: projImg4,
    },
    {
      title: "We Care - Landing Page",
      description: "HTML, CSS, Javascript",
      imgUrl: projImg5,
    },
    {
      title: "Business Landing Page",
      description: "HTML, CSS, Javascript",
      imgUrl: projImg6,
    },
    {
      title: "Food Delivery",
      description: "React, NextJS, Tailwind, Auth, LocalStorage",
      imgUrl: projImg7,
    },
    {
      title: "Manager Admin",
      description: "React, SASS, Auth, LocalStorage",
      imgUrl: projImg8,
    },
    {
      title: "Calendar App",
      description: "Python, Dash, Dash Core Components, Dash Table, Pandas",
      imgUrl: projImg9,
    },
    {
      title: "My Budget Tracker",
      description: "Python, Dash, Dash Core Components, Dash HTML, Dash Bootstrap, Plotly, Pandas",
      imgUrl: projImg10,
    },
    {
      title: "BFit Dashboard Admin",
      description: "ReactJS, NodeJS, ExpressJS, MongoDB, PHP",
      imgUrl: projImg11,
    },
  ];

  

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are some of the projects that I have worked on, both completed and in progress. I am always looking for new challenges, so if you have a project that you think would be a good fit for me, please don't hesitate to contact me.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Jobs</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">About Me</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Jobs 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                    <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projects.map((projects2, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...projects2}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}