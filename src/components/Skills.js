import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import sql from "../assets/img/postgres.png"
import Java from "../assets/img/java.jpg"
import python from "../assets/img/python.svg"
import flask from "../assets/img/flask.jpg"
import data from "../assets/img/data.png"
import bootstrap from "../assets/img/bootstrap.png"
import git from "../assets/img/git.png"
import html from "../assets/img/html.png"
import node from "../assets/img/node js.png"
import react from "../assets/img/react.png"
import sass from "../assets/img/sass.png"
import colorSharp from "../assets/img/color-sharp.png"


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className='skills' id='skills'>
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>
                Skills
              </h2>
              <p>As a dedicated software engineer, I embody the spirit of constantly seeking new knowledge and embracing challenges with enthusiasm. With a relentless drive to stay at the forefront of technology, I am always eager to expand my skill set and adapt to emerging trends. My commitment to delivering high-quality solutions and my strong work ethics enable me to excel in a dynamic environment, where I can contribute to cutting-edge projects and make a meaningful impact in the ever-evolving realm of software engineering.</p>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
              <div className="image-container">
                  {/* <img src={sql} alt="image" className="transparent-image" /> */}
                  <img src={sql} alt="Transparent Image" style={{ background: 'transparent', paddingTop: '0px' }} />
                  <br />
                  <h5>PostgreSQL</h5>
                </div>
                <div className="image-container">
                  {/* <img src={Java} alt="image" className="transparent-image" /> */}
                  <img src={Java} alt="Transparent Image" style={{ background: 'transparent', paddingTop: '66px' }} />
                  <br />
                  <h5>JavaScript</h5>
                </div>
                <div className="image-container">
                  {/* <img src={python} alt="image" className="transparent-image" /> */}
                  <img src={python} alt="Transparent Image" style={{ background: 'transparent', paddingTop: '20px', paddingRight: '10px', paddingLeft: '10px'  }} />
                  <h5>Python</h5>
                </div>
                <div className="image-container">
                  {/* <img src={react} alt="image" className="transparent-image" /> */}
                  <img src={react} alt="Transparent Image" style={{ background: 'transparent', paddingTop: '0px', paddingTop: '70px', paddingRight: '20px', paddingLeft: '20px' }} />
                  <h5>React</h5>
                </div>
                <div className="image-container">
                  {/* <img src={node} alt="image" className="transparent-image" /> */}
                  <img src={node} alt="Transparent Image" style={{ background: 'transparent', paddingTop: '100px' }} />
                  <h5>Express/Node JS</h5>
                </div>                
                <div className="image-container">
                  {/* <img src={html} alt="image" className="transparent-image" /> */}
                  <img src={html} alt="Transparent Image" style={{ background: 'transparent', marginTop: '-5px' }} />
                  <h5>Html</h5>
                </div>                
                <div className="image-container">
                  {/* <img src={sass} alt="image" className="transparent-image" /> */}
                  <img src={sass} alt="Transparent Image" style={{ background: 'transparent', paddingTop: '70px', paddingRight: '10px' }} />
                  <h5>Sass</h5>
                </div>                
                <div className="image-container">
                  {/* <img src={flask} alt="image" className="transparent-image" /> */}
                  <img src={flask} alt="Transparent Image" style={{ background: 'transparent', paddingTop: '120px', paddingRight: '10px', paddingLeft: '10px' }} />
                  <h5>Flask</h5>
                </div>                
                <div className="image-container">
                  {/* <img src={git} alt="image" className="transparent-image" /> */}
                  <img src={git} alt="Transparent Image" style={{ background: 'transparent', marjinBottom: '10px',paddingLeft: '5px'  }} />
                  <h5>Git</h5>
                </div>                
                <div className="image-container">
                  {/* <img src={data} alt="image" className="transparent-image" /> */}
                  <img src={data} alt="Transparent Image" style={{ background: 'transparent', paddingTop: '0px', paddingRight: '0px', paddingLeft: '10px'  }} />
                  <h5>Data Structures</h5>
                </div>
                <div className="image-container">
                  {/* <img src={bootstrap} alt="image" className="transparent-image" /> */}
                  <img src={bootstrap} alt="Transparent Image" style={{ background: 'transparent' }} />
                  <h5>Bootstrap</h5>
                </div>           
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      {/* <img className='background-image-left' src={colorSharp}/> */}
    </section>
  )
}

export default Skills;