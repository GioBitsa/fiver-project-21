import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const BackgroundImage = styled("img")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  zIndex: -1,
  transform: "translate(20px, 20px)",
});

const HeroImageContainer = ({ main, background }) => {
  return (
    <Box sx={{ position: "relative", mr: "24px !important" }}>
      <img style={{ width: "400px" }} src={main} alt="hero" />
      <BackgroundImage src={background} alt="background" />
    </Box>
  );
};

export default HeroImageContainer;
