import { useState, FormEvent } from "react";
import { Col, Row } from "react-bootstrap";

export default function Newsletter() {
   const [email, setEmail] = useState("");

   const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
      setEmail("");
   };

   return (
      <Col lg={12}>
         <div className="newsletter-bx wow slideInUp">
            <Row>
               <Col lg={12} md={6} xl={5}>
                  <h3>
                     Subscribe to our Newsletter<br></br> & Never miss our
                     latest updates
                  </h3>
               </Col>
               <Col md={6} xl={7}>
                  <form onSubmit={handleSubmit}>
                     <div className="new-email-bx">
                        <input
                           value={email}
                           type="email"
                           onChange={(e) => setEmail(e.target.value)}
                           placeholder="Email Address"
                        />
                        <button type="submit">Submit</button>
                     </div>
                  </form>
               </Col>
            </Row>
         </div>
      </Col>
   );
}
