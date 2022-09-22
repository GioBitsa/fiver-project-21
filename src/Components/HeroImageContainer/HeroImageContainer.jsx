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

  "@media screen and (max-width: 900px)": {
    transform: "translate(10px, 10px)",
  },
});

export const MyImage = styled("img")({
  width: "400px",

  "@media screen and (max-width: 600px)": {
    width: "100%",
  },
});

const HeroImageContainer = ({ main, background, sx }) => {
  return (
    <Box
      sx={{
        ...sx,
        position: "relative",
        mr: { xs: "10px !important", md: "20px !important" },
      }}
    >
      <MyImage src={main} alt="hero" />
      <BackgroundImage src={background} alt="background" />
    </Box>
  );
};

export default HeroImageContainer;
