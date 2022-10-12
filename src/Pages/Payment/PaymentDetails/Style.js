import { styled } from "@mui/system";
import { Box, Grid, Stack } from "@mui/material";
import palette from "../../../Shared/palette";

export const MainBox = styled(Box)({
  position: "relative",
  width: "100%",
  height: "100vh",

  "@media screen and (max-width: 899px)": {
    height: "auto",
    flexDirection: "column-reverse",
  },

  "@media screen and (max-height: 800px)": {
    height: "auto",
  },
});

export const CircleImage = styled("img")({
  position: "absolute",
  top: 0,
  right: 0,

  "@media screen and (max-width: 899px)": {
    width: "70px",
    height: "70px",
  },
});

export const Header = styled(Stack)({
  width: "100%",
  height: "120px",
  position: "relative",
  zIndex: 1,

  "& img": {
    width: "100%",
    maxWidth: "300px",
  },

  "& svg": {
    fontSize: "40px",
    color: palette.blackText,
    opacity: 0.6,
  },

  "@media screen and (max-width: 899px)": {
    height: "100px",
  },

  "@media screen and (max-width: 599px)": {
    "& img": {
      maxWidth: "200px",
    },
  },
});

export const Content = styled(Grid)({
  height: "calc(100vh - 120px)",
  paddingBottom: "50px",

  "& h2": {
    fontSize: "24px",
    fontWeight: 600,
    color: palette.blackText,
    marginBottom: "10px",
  },

  "& img": {
    width: "100%",
    objectFit: "contain",
    display: "block",
    marginBottom: "10px",
    maxWidth: "500px",
  },

  "& p": {
    color: palette.blackText,
    opacity: 0.8,
  },

  "& h3": {
    fontSize: "21px",
    fontWeight: 500,
    color: palette.blackText,
  },

  "& h6": {
    fontSize: "18px",
    fontWeight: 400,
    color: palette.blackText,
    opacity: 0.8,
  },

  "& h5": {
    fontSize: "20px",
    fontWeight: 500,
    color: palette.blackText,
  },

  "@media screen and (max-width: 899px)": {
    height: "auto",

    "& h2": {
      fontSize: "21px",
    },

    "& p": {
      fontSize: "14px",
    },

    "& h3": {
      fontSize: "18px",
    },

    "& h5": {
      fontSize: "18px",
    },

    "& h6": {
      fontSize: "14px",
    },
  },

  "@media screen and (max-height: 800px)": {
    height: "auto",
  },
});

export const PaymentDetailsContainer = styled(Stack)({
  height: "100%",
  boxShadow: "0 4px 4px rgba(34, 34, 34, 0.25)",
  padding: "40px 30px",
  borderRadius: "10px",
  backgroundColor: palette.whiteText,

  "@media screen and (max-width: 899px)": {
    backgroundColor: palette.navbarBackground,
    boxShadow: "none",
    padding: "30px 15px",
  },
});
