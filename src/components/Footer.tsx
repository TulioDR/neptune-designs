import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import Newsletter from "./Newsletter";

export default function Footer() {
   return (
      <footer className="footer">
         <Container>
            <Row className="align-items-center">
               <Newsletter />
               <Col size={12} sm={6}>
                  <img src={logo} alt="Logo" />
               </Col>
               <Col size={12} sm={6} className="text-center text-sm-end">
                  <div className="social-icon">
                     <a href="/#">
                        <img src={navIcon1} alt="navIcon1" />
                     </a>
                     <a href="/#">
                        <img src={navIcon2} alt="navIcon2" />
                     </a>
                     <a href="/#">
                        <img src={navIcon3} alt="navIcon3" />
                     </a>
                  </div>
                  <p>Copyright 2022. All Rights Reserved</p>
               </Col>
            </Row>
         </Container>
      </footer>
   );
}