import { styled } from "@mui/system";
import { Box, Stack } from "@mui/material";
import palette from "../../Shared/palette";

export const MainImage = styled("img")({
  position: "relative",
  left: "100%",
  transform: "translateX(-100%)",
  width: "300px",
  height: "300px",
  objectFit: "contain",
  zIndex: 1,

  "@media screen and (max-width: 900px)": {
    left: "50%",
    transform: "translateX(-50%)",
  },
});

export const LeftBackgroundImage = styled(Box)({
  position: "absolute",
  top: "50px",
  left: "-150px",
  width: "500px",
  height: "500px",
  borderRadius: "100%",
  background: palette.linearVerticaly,

  "@media screen and (max-width: 899px)": {
    top: 0,
    left: "-150px",
    width: "600px",
    height: "600px",
  },

  "@media screen and (max-width: 650px)": {
    left: "-250px",
  },
});

export const RightBackgroundImage = styled(Box)({
  position: "absolute",
  top: "50px",
  right: "-150px",
  width: "500px",
  height: "500px",
  borderRadius: "100%",
  background: palette.linearVerticaly,

  "@media screen and (max-width: 899px)": {
    top: 0,
    left: "-150px",
    width: "600px",
    height: "600px",
  },

  "@media screen and (max-width: 650px)": {
    left: "-250px",
  },
});

export const ImageStack = styled(Stack)({
  position: "relative",
  zIndex: 1,

  "& img": {
    width: "100px",
  },

  "@media screen and (max-width: 900px)": {
    "& img": {
      width: "150px",
    },
  },

  "@media screen and (max-width: 600px)": {
    "& img": {
      width: "100px",
    },
  },
});
