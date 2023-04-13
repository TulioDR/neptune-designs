import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { HashLink } from "react-router-hash-link";

export default function Banner() {
   const [loopNum, setLoopNum] = useState<number>(0);
   const [isDeleting, setIsDeleting] = useState<boolean>(false);
   const toRotate = ["Imagine", "Design", "Create"];
   const [text, setText] = useState<string>("");
   const [delta, setDelta] = useState<number>(300 - Math.random() * 100);
   const period = 1000;

   const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting
         ? fullText.substring(0, text.length - 1)
         : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
         setDelta((prevDelta) => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
         setIsDeleting(true);
         setDelta(period);
      } else if (isDeleting && updatedText === "") {
         setIsDeleting(false);
         setLoopNum(loopNum + 1);
         setDelta(300);
      }
   };

   useEffect(() => {
      let ticker = setInterval(() => {
         tick();
      }, delta);

      return () => {
         clearInterval(ticker);
      };
      // eslint-disable-next-line
   }, [text, delta]);

   return (
      <section className="banner" id="home">
         <Container>
            <Row className="align-items-center">
               <Col xs={12} md={6} xl={7}>
                  <div className="animate__animated animate__fadeIn">
                     <span className="tagline">Welcome to Neptune Designs</span>
                     <h1>
                        {`We`}{" "}
                        <span className="txt-rotate">
                           <span className="wrap">{text}</span>
                        </span>
                     </h1>
                     <p>
                        The most reliable designer in the solar system! From
                        Pluto to Mercury, we'll be at your side on this journey,
                        from the beginning of your dream, till its ending. We
                        are here to make the website of your dreams come true.
                     </p>
                     <HashLink to="#connect">
                        <button>
                           Let’s Connect <ArrowRightCircle size={25} />
                        </button>
                     </HashLink>
                  </div>
               </Col>
               <Col xs={12} md={6} xl={5}>
                  <div className="animate__animated animate__zoomIn">
                     <img src={headerImg} alt="Header Img" />
                  </div>
               </Col>
            </Row>
         </Container>
      </section>
   );
}
