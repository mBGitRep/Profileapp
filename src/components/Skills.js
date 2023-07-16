import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import sql from "../assets/img/postgres.png"
import Java from "../assets/img/java.jpg"
import python from "../assets/img/python.svg"
import flask from "../assets/img/flask.png"
import data from "../assets/img/data.png"
import bootstrap from "../assets/img/bootstrap.png"
import git from "../assets/img/git.png"
import html from "../assets/img/html.png"
import node from "../assets/img/node js.png"
import react from "../assets/img/react.png"
import sass from "../assets/img/sass.png"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import colorSharp from "../assets/img/color-sharp.png"

const Skills = () => {
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

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
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
              <Slider {...settings}>
                <div className="image-container">
                  <img className="skilled-image" src={sql} alt="Transparent Image" />
                  <h5>PostgreSQL</h5>
                </div>
                <div className="image-container">
                  <img className="skilled-image" src={Java} alt="Transparent Image" />
                  <h5>JavaScript</h5>
                </div>
                <div className="image-container">
                  <img className="skilled-image" src={python} alt="Transparent Image"  />
                  <h5>Python</h5>
                </div>
                <div className="image-container">
                  <img className="skilled-image" src={react} alt="Transparent Image"  />
                  <h5>React</h5>
                </div>
                <div className="image-container">
                  <img className="skilled-image" src={node} alt="Transparent Image" />
                  <h5>Express/Node JS</h5>
                </div>                
                <div className="image-container">
                  <img className="skilled-image" src={html} alt="Transparent Image"  />
                  <h5>Html</h5>
                </div>                
                <div className="image-container">
                  <img className="skilled-image" src={sass} alt="Transparent Image"  />
                  <h5>Sass</h5>
                </div>                
                <div className="image-container">
                  <img className="skilled-image" src={flask} alt="Transparent Image" />
                  <h5>Flask</h5>
                </div>                
                <div className="image-container">
                  <img className="skilled-image" src={git} alt="Transparent Image"  />
                  <h5>Git</h5>
                </div>                
                <div className="image-container">
                  <img className="skilled-image" src={data} alt="Transparent Image"  />
                  <h5>Data Structures</h5>
                </div>
                <div className="image-container">
                  <img className="skilled-image" src={bootstrap} alt="Transparent Image"  />
                  <h5>Bootstrap</h5>
                </div>           
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
      {/* <img className='background-image-left' src={colorSharp}/> */}
    </section>
  )
}
export default Skills;
