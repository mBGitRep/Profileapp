import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/Z-trans.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import resume from '../assets/img/Resume M Zeeshan Baig.pdf';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LanguageIcon from '@material-ui/icons/Language';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


function Base() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [showConnectDetails, setShowConnectDetails] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const toggleConnectDetails = () => {
    setShowConnectDetails(!showConnectDetails);
  };

  return (
    <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === 'home' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#about"
              className={
                activeLink === 'about' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('about')}
            >
              About Me
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('skills')}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#project"
              className={
                activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('projects')}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-link"
            >
              Resume
            </Nav.Link>
          </Nav>
          <Nav>
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/zee-baig"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon1} alt="" />
              </a>
            </div>
          </Nav>
          <div className="connect-details-container">
            <button
              className="vvd"
              onClick={toggleConnectDetails}
              style={{ zIndex: showConnectDetails ? 1 : 0 }}
            >
              <span>Let's Connect</span>
            </button>
            {showConnectDetails && (
              <div className="connect-details">
              <h4>Contact Details</h4>
              <p>
                <PhoneIcon /> 0413806543
                <br />
                <LanguageIcon />{' '}
                <a
                  href="http://www.zebaig.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.zebaig.com
                </a>
                <br />
                <EmailIcon />{' '}
                <a href="mailto:Baig.zee@hotmail.com">Baig.zee@hotmail.com</a>
                <br />
                <LinkedInIcon />{' '}
                <a
                  href="https://www.linkedin.com/in/zee-baig"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.linkedin.com/in/zee-baig
                </a>
              </p>
            </div>
            
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Base;
