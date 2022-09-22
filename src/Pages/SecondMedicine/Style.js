import { styled } from "@mui/system";
import { Box } from "@mui/material";
import palette from "../../Shared/palette";

export const MyImageContainer = styled(Box)({
  flex: 3,

  "& img": {
    display: "block",
    margin: "0 auto",
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
});

export const Content = styled(Box)({
  flex: 2,
  textAlign: "right",

  "& h2": {
    color: palette.lightPrimary,
    fontSize: "24px",
    fontWeight: "bold",
    margin: "20px 0",
  },

  "& p": {
    fontSize: "16px",
    color: palette.blackText,
    opacity: 0.8,
    margin: "10px 0",
  },

  "@media screen and (max-width: 1100px)": {
    "& h2": {
      fontSize: "21px",
    },
  },

  "@media screen and (max-width: 1000px)": {
    "& h2": {
      fontSize: "18px",
    },
    "& p": {
      fontSize: "14px",
    },
  },

  "@media screen and (max-width: 900px)": {
    textAlign: "left",
  },
});

export const MyItem = styled(Box)({
  width: "190px",
  borderRadius: "15px",
  backgroundColor: palette.navbarBackground,
  textAlign: "center",
  padding: "20px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  "& span": {
    fontSize: "32px",
    color: palette.primary,
    fontWeight: "bold",
  },

  "& p": {
    color: palette.blackText,
    opacity: 0.8,
    fontSize: "24px",
  },

  "&.active": {
    backgroundColor: palette.primary,
  },

  "&.active span": {
    color: palette.whiteText,
  },

  "&.active p": {
    color: palette.whiteText,
    opacity: 1,
  },

  "@media screen and (max-width: 1150px)": {
    width: "150px",

    "& span": {
      fontSize: "28px",
    },

    "& p": {
      fontSize: "21px",
    },
  },

  "@media screen and (max-width: 1000px)": {
    width: "100%",
    maxWidth: "200px",

    "& span": {
      fontSize: "24px",
    },

    "& p": {
      fontSize: "18px",
    },
  },

  "@media screen and (max-width: 600px)": {
    padding: "20px 15px",

    "& span": {
      fontSize: "21px",
    },

    "& p": {
      fontSize: "14px",
    },
  },
});

export const MyApproachItem = styled(Box)({
  textAlign: "center",
  backgroundColor: palette.primary,
  color: palette.whiteText,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "40px 20px",
  borderRadius: "15px",
  maxWidth: "400px",

  "@media screen and (max-width: 600px)": {
    padding: "20px",
  },
});

export const ImageContainer = styled(Box)({
  width: "120px",
  height: "120px",

  "& img": {
    display: "block",
    margin: "0 auto",
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },

  "@media screen and (max-width: 1000px)": {
    width: "100px",
    height: "100px",
  },
});
