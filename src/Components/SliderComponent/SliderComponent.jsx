import React from "react";
import Slider from "react-slick";
import { Container, Typography } from "@mui/material";
import palette from "../../Shared/palette";
import SliderImage from "../../Assets/SliderImage.png";
import SliderImage2 from "../../Assets/SliderImage (2).png";
import SliderImage3 from "../../Assets/SliderImage (3).png";
import SliderImage4 from "../../Assets/SliderImage (4).png";
import SliderImage5 from "../../Assets/SliderImage (5).png";
import SliderImage6 from "../../Assets/SliderImage (6).png";
import SliderImage7 from "../../Assets/SliderImage (7).png";
import "./Style.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} arrow`}
      style={{ ...style, background: palette.arrow }}
      onClick={onClick}
    >
      {props.children}
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} arrow`}
      style={{ ...style, background: palette.arrow }}
      onClick={onClick}
    >
      {props.children}
    </div>
  );
};

const SliderComponent = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: (
      <NextArrow>
        <BsChevronRight color={palette.blackText} />
      </NextArrow>
    ),
    prevArrow: (
      <PrevArrow>
        <BsChevronLeft color={palette.blackText} />
      </PrevArrow>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: "50px" }}>
        <Typography
          component="h3"
          variant="h4"
          sx={{
            pb: 3,
            color: palette.primary,
            fontWeight: "bold",
            fontSize: "24px",
          }}
        >
          ils nous font confiances
        </Typography>
      </Container>
      <Container
        maxWidth="lg"
        sx={{ mb: "50px", backgroundColor: palette.lightGrey }}
      >
        <Slider className="slider-container" {...settings}>
          <div>
            <img src={SliderImage} alt="spotify" />
          </div>
          <div>
            <img src={SliderImage2} alt="vite" />
          </div>
          <div>
            <img src={SliderImage3} alt="slack" />
          </div>
          <div>
            <img src={SliderImage4} alt="pie" />
          </div>
          <div>
            <img src={SliderImage5} alt="fox" />
          </div>
          <div>
            <img src={SliderImage6} alt="amazon" />
          </div>
          <div>
            <img src={SliderImage7} alt="google" />
          </div>
        </Slider>
      </Container>
    </>
  );
};

export default SliderComponent;
