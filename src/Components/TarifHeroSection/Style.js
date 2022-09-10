import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";
import palette from "../../Shared/palette";

export const Title = styled(Typography)({
  color: palette.whiteText,
  fontSize: "50px",
  fontWeight: "600",
  position: "relative",

  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "25%",
    height: "2px",
    backgroundColor: palette.whiteText,
  },

  "@media screen and (max-width: 600px)": {
    fontSize: "34px",
  },
});

export const MyButton = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: palette.whiteText,
  padding: "8px 15px",
  borderRadius: "7px",
  color: palette.blackText,
  fontWeight: "600",
  cursor: "pointer",

  "& span": {
    width: "25px",
    height: "25px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "100%",
    marginRight: "10px",
    backgroundColor: palette.whiteText,
    border: "1px solid rgba(0, 0, 0, 0.5)",
  },

  "& span.active": {
    backgroundColor: palette.primary,
    border: `1px solid ${palette.primary}`,
  },

  "& span.active svg": {
    display: "block",
  },

  "& svg": {
    display: "none",
    color: palette.whiteText,
  },

  "@media screen and (max-width: 900px)": {
    flex: 1,
  },
});

export const BackgroundNumberImage = styled("img")({
  position: "absolute",
  top: "100%",
  left: "50%",
  transform: "translate(0, -100%)",
  fontSize: "20rem",
  color: palette.whiteText,

  "@media screen and (max-width: 900px)": {
    width: "70px",
    height: "70px",
    objectFit: "contain",
    top: "60%",
    left: "80%",
    transform: "translate(0)",
  },

  "@media screen and (max-width: 600px)": {
    width: "50px",
    height: "50px",
    top: "calc(100% - 290px)",
  },
});

export const MainImage = styled("img")({
  width: "400px",
  position: "absolute",
  top: 0,
  left: 0,

  "@media screen and (max-width: 900px)": {
    position: "relative",
  },

  "@media screen and (max-width: 500px)": {
    width: "100%",
  },
});

export const Content = styled(Box)({
  maxWidth: "350px",
  position: "relative",
  left: "100%",
  transform: "translateX(-100%)",
  padding: "50px 0",
  zIndex: 1,

  "@media screen and (max-width: 900px)": {
    left: 0,
    transform: "translate(0)",
    padding: 0,
  },
});

export const DotsImage = styled("img")({
  position: "absolute",
  right: "50px",
  top: "calc(100% - 100px)",
  width: "250px",

  "@media screen and (max-width: 900px)": {
    display: "none",
  },
});

export const DotsContainer = styled(Box)({
  position: "absolute",
  left: "50%",
  bottom: "-50px",
  display: "flex",
  alignItems: "center",
  jusitfyContent: "center",
  cursor: "pointer",

  "& span": {
    position: "relative",
    display: "inline-block",
    width: "15px",
    height: "15px",
    margin: "0 5px",
    padding: "5px",
    borderRadius: "100%",
    backgroundColor: palette.secondaryButton,
  },

  "& span.active": {
    width: "20px",
    height: "20px",
    backgroundColor: palette.lightPrimary,
    border: `1px solid ${palette.lightPrimary}`,
  },

  "& span.active::before": {
    content: '""',
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: palette.whiteText,
    width: "100%",
    height: "100%",
    borderRadius: "100%",
  },

  "& span.active::after": {
    content: '""',
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: palette.lightPrimary,
    width: "80%",
    height: "80%",
    borderRadius: "100%",
  },

  "@media screen and (max-width: 900px)": {
    display: "none",
  },
});
