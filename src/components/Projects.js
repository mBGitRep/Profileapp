
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Tictactoe.PNG";
import projImg2 from "../assets/img/fitnessapp.PNG";
import projImg3 from "../assets/img/GreenrSA.PNG";
import projImg4 from "../assets/img/Hub360.PNG";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { isVisible } from "@testing-library/user-event/dist/utils/misc/isVisible";

export const Projects = () => {

  const projects = [
    {
      title: "Tic Tac Toe",
      description: "Game based on Javascript",
      imgUrl: projImg1,
      gitRepoLink: "https://github.com/mBGitRep/tic-tac-toe.git",
      demoLink: "https://mbgitrep.github.io/tic-tac-toe/"
    },
    {
      title: "Fitness App",
      description: "Flask App",
      imgUrl: projImg2,
      gitRepoLink: "https://github.com/mBGitRep/Fitness-app.git",
      demoLink: "https://the-fitness-app.onrender.com"
    },
    {
      title: "Greener SA",
      description: "Express SPA",
      imgUrl: projImg3,
      gitRepoLink: "https://github.com/mBGitRep/greenR_SA.git",
      demoLink: "https://greenr-sa.onrender.com"
    },
    {
      title: "Hub360",
      description: "React App with Express/Node and PostgreSQL",
      imgUrl: projImg4,
      gitRepoLink: "https://github.com/mBGitRep/hubapi.git",
      demoLink: "https://demo.example.com"
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                  <h2>Projects</h2>
                  <p>Tic Tac Toe, Fitness App, Greener SA, Hub360.</p>
                </div>}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab"> */}
                {/* <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item> */}
                {/* <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item> */}
              {/* </Nav> */}
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
                {/* <Tab.Pane eventKey="section">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                </Tab.Pane> */}
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  )
}

export default Projects;
