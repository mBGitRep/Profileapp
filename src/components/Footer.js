import { Container, Row, Col } from "react-bootstrap"
import logo from "../assets/img/Z-trans.png"
import navIcon1 from '../assets/img/nav-icon1.svg';
import Navbar from 'react-bootstrap/Navbar';

export const Footer = () => {
  return (
    <footer className="footer">
   <Container>
        <Row className="align-items-center">
          <Col className="text-center">
            <p className="mb-0">© 2023 All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

