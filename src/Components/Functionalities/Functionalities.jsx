import React from "react";
import { Container, Box } from "@mui/material";
// import Lottie from "react-lottie";
import palette from "../../Shared/palette";
// import animationData from "../../Assets/Animations/Functionalities/anim_1_ENGLISH.json";

const Functionalities = () => {
  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: animationData,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };

  return (
    <Box sx={{ backgroundColor: palette.navbarBackground, py: 5, mb: "50px" }}>
      <Container maxWidth="lg">
        {/* <Lottie options={defaultOptions} height={"100%"} width={"100%"} /> */}
      </Container>
    </Box>
  );
};

export default Functionalities;
