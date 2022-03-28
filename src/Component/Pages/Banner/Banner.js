import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../../img/IELTS-banner.jpg";
import img2 from "../../../img/ielts-international-english-language-testing-260nw-1562715973.webp";
import img3 from "../../../img/istockphoto-1314395227-1024x1024.jpg";

const Banner = () => {
  return (
<Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100 h-50"
      src={img3}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100 h-50"
      src={img1}
      alt="Second slide"
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-50"
      src={img2}
      alt="Third slide"
    />
   
  </Carousel.Item>
</Carousel>
  );
};

export default Banner;
