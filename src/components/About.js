import { Container, Row, Col } from 'react-bootstrap';
import 'react-multi-carousel/lib/styles.css';

import colorSharp from "../assets/img/color-sharp.png"


export const About = () => {
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
    <section className='about' id='about'>
      <Container>
        <Row>
          <Col>
            <div className="about-bx">
              <h2>
                About Me
              </h2>
              <p>I am a passionate and dedicated software engineer with expertise in software development, project management, operations and people management. I have experience working with various technologies such as React, JavaScript, HTML, and CSS. I love creating responsive and user-friendly apps that provide a great user experience.
        Throughout my career, I have worked on numerous projects, both independently and as part of a team. I enjoy collaborating with others and leveraging my skills to create innovative solutions.
        In my free time, I enjoy exploring new technologies, reading tech blogs, and attending tech conferences to stay up-to-date with the latest industry trends. I am constantly seeking new challenges and opportunities to enhance my skills and grow as a developer.</p>
  
            </div>
          </Col>
        </Row>
      </Container>
      <img className='background-image-left' src={colorSharp}/>
    </section>
  )
}

export default About;