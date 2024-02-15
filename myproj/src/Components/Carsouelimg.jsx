import Carousel from "react-bootstrap/Carousel";

import image1 from "./Image/image-4.jpg";
import image2 from "./Image/image-5.jpg";
import image3 from "./Image/image-7.jpg";

const imgStyle = {
  objectFit: "cover", // Maintain aspect ratio and cover the container
  maxHeight: "500px", // Set the maximum height as per your requirement
};

function CarouselFun() {
  return (
    <Carousel data-bs-theme="dark" className="d-block w-100">
      <Carousel.Item style={{ position: "relative" }}>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
          style={{ ...imgStyle, opacity: 0.6 }} // Set opacity for the image
        />

        <Carousel.Caption
          style={{
            textAlign: "center",
            color: "black",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            opacity: 1.0, // Set opacity for the text
          }}
        >
          <b>
            <i>
              <h1 style={{ color: "black", fontSize: "2.5em", opacity: 1.0 }}>
                SwaadGhar Delights
              </h1>
            </i>
          </b>
          <br></br>

          <strong> <h6 style={{ color: "black", fontSize: "1.2em", opacity: 0.8 }}>
            SwaadGhar Delights has been serving 100% Fresh and Authentic Indian
            Food for over a decade in the city of Pune. Unlike other tiffin and
            catering services we give you multiple options to choose your own
            meals as we have got a wide range of menu selection.
          </h6></strong>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={{ position: "relative" }}>
        <img
          className="d-block w-100"
          src={image2}
          alt="First slide"
          style={{ ...imgStyle, opacity: 0.6 }} // Set opacity for the image
        />

        <Carousel.Caption
          style={{
            textAlign: "center",
            color: "black",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            opacity: 1.0, // Set opacity for the text
          }}
        >
          <b>
            <i>
              <h1 style={{ color: "black", fontSize: "2.5em", opacity: 1.0 }}>
                SwaadGhar Delights
              </h1>
            </i>
          </b>
          <br></br>

          <strong> <h6 style={{ color: "black", fontSize: "1.2em", opacity: 0.8 }}>
            You can order according to your needs and desires as there is a
            choice between Jain food, Vegetarian food, and Non-vegetarian food.
          </h6></strong>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={{ position: "relative" }}>
        <img
          className="d-block w-100"
          src={image3}
          alt="First slide"
          style={{ ...imgStyle, opacity: 0.6 }} // Set opacity for the image
        />

        <Carousel.Caption
          style={{
            textAlign: "center",
            color: "black",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            opacity: 1.0, // Set opacity for the text
          }}
        >
          <strong>
            <i>
              <h1 style={{ color: "black", fontSize: "2.5em", opacity: 1.0 }}>
                SwaadGhar Delights
              </h1>
            </i>
            </strong>
          <br></br>
          <strong>  <h6 style={{ color: "black", fontSize: "1.2em", opacity: 0.8 }}>
            Moreover you can customise your own meal according to your cravings
            and get rid of the same old boring food .
          </h6></strong>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFun;
