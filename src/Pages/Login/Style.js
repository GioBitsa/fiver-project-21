import { Box, Button } from "@mui/material";
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

export const MyLink = styled("span")({
  display: "inline-block",
  fontSize: "16px",
  fontWeight: "300",
  borderBottom: "1px solid rgba(0, 0, 0, 0.8)",
  cursor: "pointer",
  marginBottom: "30px",
  position: "relative",
  left: "100%",
  transform: "translate(-100%)",
  color: palette.blackText,
});

export const GoogleButton = styled(Button)({
  padding: "8px 20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid #03014C",
  borderOpacity: "0.5",
  borderRadius: "77px",
  width: "150px",
  height: "51px",
  color: palette.blackText,

  "& img": {
    marginRight: "10px",
  },

  "@media screen and (max-width: 600px)": {
    width: "200px",
  },
});

export const OtherLoginButton = styled(Button)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "77px",
  height: "51px",

  "& img": {
    width: "200px",
    height: "51px",
    objectFit: "contain",
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
