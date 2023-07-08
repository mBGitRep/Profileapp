import { Col } from "react-bootstrap";

// export const ProjectCard = ({ title, description, imgUrl }) => {
//   return (
//     <Col size={12} sm={6} md={4}>
//       <div className="proj-imgbx">
//         <img src={imgUrl} />
//         <div className="proj-txtx">
//           <h4>{title}</h4>
//           <span>{description}</span>
//         </div>
//       </div>
//     </Col>
//   )
// }

import React from "react";

export const ProjectCard = ({ title, description, imgUrl, gitRepoLink, demoLink }) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div>
            <a href={gitRepoLink} target="_blank" rel="noopener noreferrer">Git Repositary</a><br />
            <a href={demoLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </div>
      </div>
    </div>
  );
};
