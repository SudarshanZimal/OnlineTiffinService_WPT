import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import i1 from "./Image/tiffin2.png";

import { Link } from 'react-router-dom';
const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row>
            <Col md={6}>
              <h1 className="display-4">Delicious Tiffin Services</h1>
              <br></br>
              <p className="lead">
                Enjoy tasty and healthy meals delivered to your doorstep. Experience the joy of
                delightful dining with us!
              </p>
              <br></br>
              <Link to="/mealplansection">
                <Button variant="success" className="me-2">
                  Order Now
                </Button>
              </Link>
            </Col>
            <Col md={6}>
              {/* You can add an image or any other content here */}
              <div className="image-container">
                <img
                  src={i1} // Add the path to your first hero image
                  alt="Hero Section"
                  className="img-fluid mb-3"
                />
                {/* <img
                  src={i2} // Add the path to your second hero image
                  alt="Hero Section"
                  className="img-fluid mb-3"
                />
                <img
                  src={i3} // Add the path to your third hero image
                  alt="Hero Section"
                  className="img-fluid mb-3"
                />
                <img
                  src={i4}  // Add the path to your fourth hero image
                  alt="Hero Section"
                  className="img-fluid"
                /> */}
                 
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="features-section mt-5">
        <Container>
          <Row>
            <Col md={4}>
              <div className="feature-item">
                <i className="fas fa-utensils fa-3x"></i>
                <h3>Delicious Meals</h3>
                <p>Our chefs prepare mouthwatering meals with fresh and high-quality ingredients.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="feature-item">
                <i className="fas fa-clock fa-3x"></i>
                <h3>Convenient</h3>
                <p>Enjoy the convenience of having your meals delivered right to your doorstep.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="feature-item">
                <i className="fas fa-heart fa-3x"></i>
                <h3>Healthy Options</h3>
                <p>Choose from a variety of healthy options tailored to your dietary preferences.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CSS Styles */}
      <style>
        {`
          .hero-section {
            background-color: #f8f9fa;
            padding: 100px 0;
            text-align: center;
          }

          .hero-section h1 {
            color: #007bff;
          }

          .features-section {
            text-align: center;
          }

          .feature-item {
            margin-bottom: 30px;
          }

          .feature-item i {
            color: #28a745;
          }

          .image-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
          }

          .image-container img {
            width: 100%;
            max-width: 500px;
            margin-bottom: 7px;
          }
        `}
      </style>
    </div>
  );
};

export default About;
