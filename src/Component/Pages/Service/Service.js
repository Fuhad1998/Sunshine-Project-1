import React from "react";
import { Card, CardGroup } from "react-bootstrap";

const Service = ({ product }) => {
  const { name, img, price, detail } = product;
  return (
    <div className="col-xs-12 col-sm-12 col-md-4 mt-2 shadow-lg">
      <CardGroup>
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>Name {name}</Card.Title>
            <Card.Text>Detail {detail }</Card.Text>
            <Card.Text>Price {price }</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Service;
