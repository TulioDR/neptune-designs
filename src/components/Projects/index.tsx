import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../../assets/img/color-sharp2.png";

import personalProjects from "../../assets/projects/personalProjects";
import mediumProjects from "../../assets/projects/mediumProjects";
import bigProjects from "../../assets/projects/bigProjects";

export default function Projects() {
   return (
      <section className="project" id="projects">
         <Container>
            <Row>
               <Col size={12}>
                  <div className="animate__animated animate__fadeIn">
                     <h2>Projects</h2>
                     <p>
                        From personal portfolios, through small businesses
                        websites, to complex applications for big companies. We
                        cover them all.
                        <br />
                        Here are some examples for you to review.
                     </p>
                     <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav
                           variant="pills"
                           className="nav-pills mb-5 justify-content-center align-items-center"
                           id="pills-tab"
                        >
                           <Nav.Item>
                              <Nav.Link eventKey="first">Personal</Nav.Link>
                           </Nav.Item>
                           <Nav.Item>
                              <Nav.Link eventKey="second">
                                 Small Businesses
                              </Nav.Link>
                           </Nav.Item>
                           <Nav.Item>
                              <Nav.Link eventKey="third">
                                 Big Companies
                              </Nav.Link>
                           </Nav.Item>
                        </Nav>
                        <Tab.Content
                           id="slideInUp"
                           className="animate__animated animate__slideInUp"
                        >
                           <Tab.Pane eventKey="first">
                              <Row>
                                 {personalProjects.map((project, index) => (
                                    <ProjectCard key={index} {...project} />
                                 ))}
                              </Row>
                           </Tab.Pane>
                           <Tab.Pane eventKey="second">
                              <Row>
                                 {mediumProjects.map((project, index) => (
                                    <ProjectCard key={index} {...project} />
                                 ))}
                              </Row>
                           </Tab.Pane>
                           <Tab.Pane eventKey="third">
                              <Row>
                                 {bigProjects.map((project, index) => (
                                    <ProjectCard key={index} {...project} />
                                 ))}
                              </Row>
                           </Tab.Pane>
                        </Tab.Content>
                     </Tab.Container>
                  </div>
               </Col>
            </Row>
         </Container>
         <img
            className="background-image-right"
            src={colorSharp2}
            alt="colorSharp2"
         ></img>
      </section>
   );
}
