import { styled } from "@mui/system";
import { Box, Container, Step, StepLabel, Stack } from "@mui/material";
import palette from "../../Shared/palette";

export const MainBox = styled(Box)({
  background: palette.linearHorizontaly,
  minHeight: "100vh",
  position: "relative",
  overflowX: "hidden",
  display: "flex",
  alignItems: "center",
  padding: "40px 0",

  "& .top-ellipse, .bottom-ellipse, .dots": {
    position: "absolute",
  },

  "& .top-ellipse": {
    top: 0,
    left: 0,
    transform: "scaleY(-1)",
  },

  "& .bottom-ellipse": {
    bottom: 0,
    right: 0,
    transform: "scaleY(-1)",
  },

  "& .dots": {
    top: 0,
    right: 0,
  },
});

export const MyContainer = styled(Container)({
  backgroundColor: palette.whiteText,
  borderRadius: "10px",
  padding: "40px",
  position: "relative",
  zIndex: 1,

  "@media screen and (max-width: 600px)": {
    padding: "40px 20px",
  },
});

export const LogoContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "& img": {
    marginRight: "10px",
    width: "50px",
    height: "50px",
    objectFit: "contain",
  },

  "& h2": {
    fontSize: "34px",
    color: palette.primary,
    fontWeight: "600",
  },

  "@media screen and (max-width: 600px)": {
    "& h2": {
      fontSize: "28px",
    },
  },
});

export const MyStep = styled(Step)({
  "& .MuiStepConnector-root": {
    top: "20px",
  },
  "& .MuiStepLabel-iconContainer": {
    zIndex: 1,
  },
});

export const MyStepLabel = styled(StepLabel)({
  ".Mui-active": {
    color: `${palette.primary} !important`,
    fontWeight: "600 !important",
  },

  ".Mui-disabled": {
    color: palette.blackText,
    opacity: 0.6,
  },

  ".Mui-completed": {
    color: `${palette.primary} !important`,
    fontWeight: "600 !important",
    opacity: 1,
  },

  "@media screen and (max-width: 600px)": {
    "& .MuiStepLabel-label": {
      fontSize: "12px",
    },
  },
});

export const ButtonContainer = styled(Stack)({
  "& button": {
    width: "150px",
    height: "50px",
  },

  "& .secondary": {
    backgroundColor: `${palette.secondaryButton} !important`,
    opacity: 0.8,
    color: `${palette.blackText} !important`,
  },
});
