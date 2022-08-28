import { Box } from "@mui/material";
import { styled } from "@mui/system";
import palette from "../../Shared/palette";

export const RightContainer = styled(Box)({
  background: palette.linearVerticaly,
  position: "relative",
  height: "100%",
  padding: "40px",
  borderRadius: "10px",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",

  "& .top-ellipse, .bottom-ellipse, .bottom-dots": {
    position: "absolute",
    width: "100px",
  },

  "& .top-ellipse": {
    top: 0,
    right: 0,
  },

  "& .bottom-ellipse": {
    bottom: 0,
    left: 0,
  },

  "& .bottom-dots": {
    right: 0,
    bottom: 0,
  },

  "@media screen and (max-width: 900px)": {
    "& .top-ellipse, .bottom-ellipse, .bottom-dots": {
      width: "70px",
    },
  },

  "@media screen and (max-width: 500px)": {
    padding: "40px 20px",
  },
});

export const LogoContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "10px",

  "& img": {
    marginRight: "10px",
    width: "50px",
    height: "50px",
    objectFit: "contain",
  },

  "& h2": {
    fontSize: "34px",
    color: palette.whiteText,
  },

  "@media screen and (max-width: 600px)": {
    "& h2": {
      fontSize: "28px",
      color: palette.whiteText,
    },
  },
});

export const LoginImg = styled("img")({
  width: "100%",
  display: "block",
  margin: "0 auto",

  "@media screen and (max-width: 900px)": {
    maxWidth: "500px",
  },
});
