import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import img1 from "../../../img/Expert/New Project (6).jpg"
import img2 from "../../../img/Expert/New Project (7).jpg"
import img3 from "../../../img/Expert/New Project (8).jpg"

const Expertise = () => {
  return (
    <div className="container" >
      <h1>Our Expert</h1>
      <div className="row py-3 shadow-lg mb-5">
        <div className="col-sm-12 col-xs-12 col-md-4  p-5">
          <CardGroup>
            <Card>
              <Card.Img variant="top" src={img1} />
              
            </Card>
          </CardGroup>
        </div>
        <div className="col-sm-12 col-xs-12 col-md-4  p-5">
          <CardGroup>
            <Card>
              <Card.Img variant="top" src={img2} />
            
            </Card>
          </CardGroup>
        </div>
        <div className="col-sm-12 col-xs-12 col-md-4 p-5">
          <CardGroup>
            <Card>
              <Card.Img variant="top" src={img3} />
              
            </Card>
          </CardGroup>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
