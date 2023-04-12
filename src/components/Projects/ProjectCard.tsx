import { Col } from "react-bootstrap";

type Props = {
   title: string;
   description: string;
   imgUrl: any;
};

export default function ProjectCard({ title, description, imgUrl }: Props) {
   return (
      <Col size={12} sm={6} md={4}>
         <div className="proj-imgbx">
            <img src={imgUrl} alt={title} />
            <div className="proj-txtx">
               <h4>{title}</h4>
               <span>{description}</span>
            </div>
         </div>
      </Col>
   );
}
