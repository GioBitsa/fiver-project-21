import React from "react";
import { Container, Box } from "@mui/material";
import Lottie from "lottie-react";
import palette from "../../Shared/palette";
import animationData from "../../Assets/Animations/Functionalities/anim_1_ENGLISH.json";

const Functionalities = () => {
  return (
    <Box sx={{ backgroundColor: palette.navbarBackground, py: 5, mb: "50px" }}>
      <Container maxWidth="lg">
        <Lottie
          className="lottie"
          style={{ width: "100%", height: "100%" }}
          animationData={animationData}
          loop={true}
        />
      </Container>
    </Box>
  );
};

export default Functionalities;
