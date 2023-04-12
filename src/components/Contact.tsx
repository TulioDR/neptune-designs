import { FormEvent, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { XLg } from "react-bootstrap-icons";

export default function Contact() {
   const formInitialDetails = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
   };
   const [formDetails, setFormDetails] = useState(formInitialDetails);
   const [buttonText, setButtonText] = useState("Send");

   const [messageSent, setMessageSent] = useState<boolean>(false);

   const onFormUpdate = (category: any, value: string) => {
      setFormDetails({
         ...formDetails,
         [category]: value,
      });
   };

   const handleSubmit = async (e: FormEvent) => {
      e.preventDefault();
      setButtonText("Sending...");
      setTimeout(() => {
         setMessageSent(true);
         setButtonText("Send");
      }, 2000);
   };

   return (
      <>
         {messageSent && (
            <div className="contact-message">
               <Container>
                  <div className="d-flex justify-content-end">
                     <div className="contact-message-inner d-flex align-items-center bg-white text-dark ms-auto rounded rounded-lg py-2 px-4">
                        <div className="me-3">
                           <div>{"This website is only a concept he he."}</div>
                           <div>{"But thank you for the interest. :)"}</div>
                        </div>
                        <button onClick={() => setMessageSent(false)}>
                           <XLg />
                        </button>
                     </div>
                  </div>
               </Container>
            </div>
         )}
         <section className="contact" id="connect">
            <Container>
               <Row className="align-items-center">
                  <Col size={12} md={6}>
                     <TrackVisibility>
                        {({ isVisible }) => (
                           <img
                              className={
                                 isVisible
                                    ? "animate__animated animate__zoomIn"
                                    : ""
                              }
                              src={contactImg}
                              alt="Contact Us"
                           />
                        )}
                     </TrackVisibility>
                  </Col>
                  <Col size={12} md={6}>
                     <TrackVisibility>
                        {({ isVisible }) => (
                           <div
                              className={
                                 isVisible
                                    ? "animate__animated animate__fadeIn"
                                    : ""
                              }
                           >
                              <h2>Get In Touch</h2>
                              <form onSubmit={handleSubmit}>
                                 <Row>
                                    <Col size={12} sm={6} className="px-1">
                                       <input
                                          type="text"
                                          value={formDetails.firstName}
                                          placeholder="First Name"
                                          onChange={(e) =>
                                             onFormUpdate(
                                                "firstName",
                                                e.target.value
                                             )
                                          }
                                       />
                                    </Col>
                                    <Col size={12} sm={6} className="px-1">
                                       <input
                                          type="text"
                                          value={formDetails.lastName}
                                          placeholder="Last Name"
                                          onChange={(e) =>
                                             onFormUpdate(
                                                "lastName",
                                                e.target.value
                                             )
                                          }
                                       />
                                    </Col>
                                    <Col size={12} sm={6} className="px-1">
                                       <input
                                          type="email"
                                          value={formDetails.email}
                                          placeholder="Email Address"
                                          onChange={(e) =>
                                             onFormUpdate(
                                                "email",
                                                e.target.value
                                             )
                                          }
                                       />
                                    </Col>
                                    <Col size={12} sm={6} className="px-1">
                                       <input
                                          type="tel"
                                          value={formDetails.phone}
                                          placeholder="Phone No."
                                          onChange={(e) =>
                                             onFormUpdate(
                                                "phone",
                                                e.target.value
                                             )
                                          }
                                       />
                                    </Col>
                                    <Col size={12} className="px-1">
                                       <textarea
                                          rows={6}
                                          value={formDetails.message}
                                          placeholder="Message"
                                          onChange={(e) =>
                                             onFormUpdate(
                                                "message",
                                                e.target.value
                                             )
                                          }
                                       ></textarea>
                                       <button type="submit">
                                          <span>{buttonText}</span>
                                       </button>
                                    </Col>
                                 </Row>
                              </form>
                           </div>
                        )}
                     </TrackVisibility>
                  </Col>
               </Row>
            </Container>
         </section>
      </>
   );
}
