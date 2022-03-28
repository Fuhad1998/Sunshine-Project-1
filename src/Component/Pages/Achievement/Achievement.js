import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import img1 from "../../../img/Achievement/New Project (10).jpg"
import img2 from "../../../img/Achievement/New Project (6).jpg"
import img3 from "../../../img/Achievement/New Project (7).jpg"
import img4 from "../../../img/Achievement/New Project (8).jpg"
import img5 from "../../../img/Achievement/New Project (9).jpg"

const Achievement = () => {
  return (
    <div className="container">
      <div className="row pt-5">
          <h1>This is Our Success</h1>
        <div className="col-sm-12 col-md-4 my-3  shadow-lg">
          <CardGroup>
            <Card>
              <Card.Img variant="top" src={img1} />
              <Card.Body>
                <Card.Title>Samenta</Card.Title>
                <Card.Text>
                Overall band 8.5
                </Card.Text>
              </Card.Body>
            
            </Card>
          </CardGroup>
        </div>
        <div className="col-sm-12 col-md-4 my-3  shadow-lg">
          <CardGroup>
            <Card>
              <Card.Img variant="top" src={img2} />
              <Card.Body>
                <Card.Title>Karena</Card.Title>
                <Card.Text>
                Overall band 9
                </Card.Text>
              </Card.Body>
             
            </Card>
          </CardGroup>
        </div>
        <div className="col-sm-12 col-md-4 my-3  shadow-lg">
          <CardGroup>
            <Card>
              <Card.Img variant="top" src={img3} />
              <Card.Body>
                <Card.Title>Santha</Card.Title>
                <Card.Text>
                Overall band 8
                </Card.Text>
              </Card.Body>
           
            </Card>
          </CardGroup>
        </div>
        <div className="col-sm-12 col-md-4 my-3  shadow-lg">
          <CardGroup>
            <Card>
              <Card.Img variant="top" src={img4} />
              <Card.Body>
                <Card.Title>Jorna</Card.Title>
                <Card.Text>
                Overall band 6
                </Card.Text>
              </Card.Body>
             
            </Card>
          </CardGroup>
        </div>
        <div className="col-sm-12 col-md-4 my-3 shadow-lg">
          <CardGroup>
            <Card>
              <Card.Img variant="top" src={img5} />
              <Card.Body>
                <Card.Title>Hachena kathun</Card.Title>
                <Card.Text>
                Overall band 7.5
                </Card.Text>
              </Card.Body>
             
            </Card>
          </CardGroup>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
