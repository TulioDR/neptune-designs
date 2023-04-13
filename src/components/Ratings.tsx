import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";

import colorSharp from "../assets/img/color-sharp.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Ratings() {
   const responsive = {
      superLargeDesktop: {
         // the naming can be any, depends on you.
         breakpoint: { max: 4000, min: 3000 },
         items: 5,
      },
      desktop: {
         breakpoint: { max: 3000, min: 1024 },
         items: 3,
      },
      tablet: {
         breakpoint: { max: 1024, min: 464 },
         items: 2,
      },
      mobile: {
         breakpoint: { max: 464, min: 0 },
         items: 1,
      },
   };

   return (
      <section className="skill" id="ratings">
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <div className="skill-bx wow zoomIn">
                     <h2>Ratings</h2>
                     <p>
                        We've compiled a list of ratings by our clients.
                        <br />
                        They are the average ratings given by them in different
                        categories.
                     </p>
                     <Carousel
                        responsive={responsive}
                        infinite={true}
                        className="owl-carousel owl-theme skill-slider"
                     >
                        <div className="item">
                           <img src={meter1} alt="meter1" />
                           <h5>Web Development</h5>
                        </div>
                        <div className="item">
                           <img src={meter2} alt="meter2" />
                           <h5>Brand Identity</h5>
                        </div>
                        <div className="item">
                           <img src={meter3} alt="meter3" />
                           <h5>Logo Design</h5>
                        </div>
                        <div className="item">
                           <img src={meter1} alt="meter4" />
                           <h5>User Interface</h5>
                        </div>
                        <div className="item">
                           <img src={meter3} alt="meter5" />
                           <h5>User Experience</h5>
                        </div>
                        <div className="item">
                           <img src={meter3} alt="meter6" />
                           <h5>Communication</h5>
                        </div>
                     </Carousel>
                  </div>
               </div>
            </div>
         </div>
         <img className="background-image-left" src={colorSharp} alt="color" />
      </section>
   );
}
