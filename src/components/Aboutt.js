import React from 'react';
// import { Container } from 'react-bootstrap';
import { Col, Container, Row } from "react-bootstrap"
import colorSharp from "../assets/img/color-sharp.png"


const About = () => {
  return (
    <section className="about" id='about'>
      <Container>
          <Row>
           <Col>
      <div className="about-bx">
        <h2>
          About Me
        </h2>
        <p>I am a passionate and dedicated developer with expertise in web development. I have experience working with various technologies such as React, JavaScript, HTML, and CSS. I love creating responsive and user-friendly websites that provide a great user experience.
        Throughout my career, I have worked on numerous projects, both independently and as part of a team. I enjoy collaborating with others and leveraging my skills to create innovative solutions.
        In my free time, I enjoy exploring new technologies, reading tech blogs, and attending tech conferences to stay up-to-date with the latest industry trends. I am constantly seeking new challenges and opportunities to enhance my skills and grow as a developer.
        
        
        
        </p>
        </div>
    </Col>
  </Row>
</Container>
<img className='background-image-left' src={colorSharp}/>
    </section>
  );
}

export default About;






